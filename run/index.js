const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const inputN = Number(input[0]);
const inputLine = [];

for (let i = 0; i < input.length; i++) {
  inputLine.push(
    input[i]
      .toString()
      .trim()
      .split(" ")
      .map((v) => Number(v))
  );
}
console.log(inputLine);
