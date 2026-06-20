import * as huge from "hugeicons-react";
const keys = Object.keys(huge);
console.log("Docs:", keys.filter(k => k.toLowerCase().includes("document")).slice(0, 5));
console.log("Shield:", keys.filter(k => k.toLowerCase().includes("shield")).slice(0, 5));
console.log("Truck:", keys.filter(k => k.toLowerCase().includes("truck")).slice(0, 5));
console.log("Star:", keys.filter(k => k.toLowerCase().includes("star")).slice(0, 5));
console.log("Link:", keys.filter(k => k.toLowerCase().includes("link")).slice(0, 5));
console.log("User:", keys.filter(k => k.toLowerCase().includes("user")).slice(0, 5));
