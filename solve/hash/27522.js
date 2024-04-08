const { readFileSync } = require("fs");
const token = readFileSync(0, { encoding: "ascii" })
  .split(/\s+/)
  [Symbol.iterator]();
const line = [];

// const T = +token.next().value;
const tempList = [];
for (let i = 0; i < 8; ++i) {
  const time = token.next().value;
  const team = token.next().value;
  const minute = +time.split(":")[0] * 60 * 1000;
  console.log("minute", minute);
  const second = +time.split(":")[1] * 1000; // 한줄로 처리가능
  console.log("seconde", second);
  const totalTime = +time.split(":")[2] + minute + second;
  console.log("total", totalTime);
  tempList.push({
    time: totalTime,
    team,
  });
  //초로 모두 바꾼뒤에 배열에 담아서
  //그후에 순위를 비교
  //아니면
}
tempList.sort((a, b) => {
  return a.time - b.time;
});
let RedScore = 0;
let BlueScore = 0; //객체에 넣어도 됨.
const scoreList = [10, 8, 6, 5, 4, 3, 2, 1];
for (let i = 0; i < 8; ++i) {
  if (tempList[i].team === "R") {
    RedScore += scoreList[i];
  }
  if (tempList[i].team === "B") {
    BlueScore += scoreList[i];
  }
}
RedScore > BlueScore ? line.push("Red") : line.push("Blue");
console.log(line.join("\n"));
``;
