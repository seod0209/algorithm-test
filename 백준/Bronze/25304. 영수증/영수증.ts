const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const inputX = Number(input[0]);
const inputN = Number(input[1]);
let calced = 0;

for (let i = 2; i < inputN + 2; i++) {
  const [a, b] = input[i].trim().split(" ").map(Number);
  calced += a * b;
}

if (inputX === calced) {
  console.log("Yes");
} else {
  console.log("No");
}
