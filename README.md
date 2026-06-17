# Figma Design Downloader (Node.js)

This project exports a Figma frame as an image and creates a simple HTML page that shows it exactly as rendered.

## 1) Setup

```bash
cp .env.example .env
```

Add your personal Figma token in `.env`:

- Create token from Figma account settings.
- Set `FIGMA_ACCESS_TOKEN`.

## 2) Download/export

```bash
npm run download:figma
```

Generated files:

- `output/design.png` (or chosen format)
- `output/index.html`
- `output/meta.json`

Open `output/index.html` in your browser.

## Notes

- The file key is prefilled for:
  `https://www.figma.com/design/3Z1gBGWGNmFeGA5HYdJGMD/Logistics-Website-template--Community-?node-id=0-1&p=f&t=2oxPZLua4clI5BZN-0`
- If your target is another frame, update `FIGMA_NODE_ID` with that frame's node id.
