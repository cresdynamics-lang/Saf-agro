require("dotenv").config();
const fs = require("fs/promises");
const path = require("path");
const axios = require("axios");

const FILE_KEY = process.env.FIGMA_FILE_KEY || "3Z1gBGWGNmFeGA5HYdJGMD";
const NODE_ID = process.env.FIGMA_NODE_ID || "0:1";
const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const SCALE = Number(process.env.FIGMA_SCALE || 2);
const FORMAT = process.env.FIGMA_FORMAT || "png";
const OUTPUT_DIR = path.resolve(process.cwd(), "output");

if (!TOKEN) {
  console.error("Missing FIGMA_ACCESS_TOKEN in .env");
  process.exit(1);
}

const figma = axios.create({
  baseURL: "https://api.figma.com/v1",
  headers: {
    "X-Figma-Token": TOKEN,
  },
  timeout: 60_000,
});

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function downloadFile(url, destination) {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  await fs.writeFile(destination, response.data);
}

async function main() {
  await ensureDir(OUTPUT_DIR);

  const imageRes = await figma.get(`/images/${FILE_KEY}`, {
    params: {
      ids: NODE_ID,
      format: FORMAT,
      scale: SCALE,
      use_absolute_bounds: true,
    },
  });

  const imageUrl = imageRes.data.images[NODE_ID];
  if (!imageUrl) {
    throw new Error(
      "No image generated for the target node. Check FILE_KEY and NODE_ID."
    );
  }

  const designPath = path.join(OUTPUT_DIR, `design.${FORMAT}`);
  await downloadFile(imageUrl, designPath);

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Figma Export</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background: #f5f5f5;
        display: flex;
        justify-content: center;
      }
      img {
        max-width: 100%;
        height: auto;
        display: block;
      }
      .wrap {
        width: min(100vw, 1920px);
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      <img src="./design.${FORMAT}" alt="Figma exported design" />
    </div>
  </body>
</html>`;

  await fs.writeFile(path.join(OUTPUT_DIR, "index.html"), html);
  await fs.writeFile(
    path.join(OUTPUT_DIR, "meta.json"),
    JSON.stringify(
      {
        fileKey: FILE_KEY,
        nodeId: NODE_ID,
        scale: SCALE,
        format: FORMAT,
        exportedAt: new Date().toISOString(),
      },
      null,
      2
    )
  );

  console.log("Export complete:");
  console.log(`- ${designPath}`);
  console.log(`- ${path.join(OUTPUT_DIR, "index.html")}`);
}

main().catch((error) => {
  console.error("Export failed:", error.message);
  process.exit(1);
});
