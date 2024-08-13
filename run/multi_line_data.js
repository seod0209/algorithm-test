const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";

// 입력 값의 첫 줄과 나머지 줄이 각각 다른 것을 의미할 때
const input = readFileSync(filePath).toString().trim().split("\n");

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
