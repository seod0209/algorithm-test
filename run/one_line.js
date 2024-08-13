const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";

// 첫째 줄에 N이 주어진다.
const inputData = fs.readFileSync(filePath).toString().split(" ");

console.log(answer);
