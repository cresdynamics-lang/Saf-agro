import * as huge from "hugeicons-react";
const keys = Object.keys(huge);
console.log("Map/Pin:", keys.filter(k => k.toLowerCase().includes("map") || k.toLowerCase().includes("pin") || k.toLowerCase().includes("location")).slice(0, 15));
