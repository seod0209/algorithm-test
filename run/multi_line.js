const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";

const inputData = fs.readFileSync(filePath).toString().split("\n");

console.log();
