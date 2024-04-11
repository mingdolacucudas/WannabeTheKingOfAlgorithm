const { readFileSync } = require("fs");
const token = readFileSync(0, { encoding: "ascii" })
  .split(/\s+/)
  [Symbol.iterator]();
const line = [];

const studiedClass = token.next().value; //수강한 과목수
const needClass = token.next().value; //필요한 과목수
const openClass = token.next().value; //공개된 과목수
const classList = []; //수강한 과목리스트
const scoreList = []; //점수리스트

for (let i = 0; i < studiedClass; ++i) {
  const className = token.next().value;
  const score = token.next().value;
  classList.push([className, score]);
  //여기서부터 점수계산 시작
}
let filteredClass = classList;
for (let i = 0; i < openClass; ++i) {
  const openClassName = token.next().value; //공개된 과목 이름
  //classList에서 해당과목을 찾음.
  //해당 과목의 점수 찾기
  //점수를 찾아서 스코어 리스트에 넣어

  const tempClass = classList.filter((v) => v[0] === openClassName);

  scoreList.push(tempClass[0][1]);
  filteredClass = filteredClass.filter((v) => v[0] !== openClassName);
  //여기서부터 점수계산 시작
}
filteredClass.sort((a, b) => {
  return a[1] - b[1];
});

const classCount = needClass - openClass;

const defaultScore = scoreList.reduce((acc, cur) => acc * 1 + cur * 1);

const maxList = filteredClass.slice(
  filteredClass.length - classCount,
  filteredClass.length
);

let maxScore = defaultScore;
for (let i = 0; i < maxList.length; ++i) {
  maxScore += maxList[i][1] * 1;
}
const minList = filteredClass.slice(0, classCount);
let minScore = defaultScore;
for (let i = 0; i < minList.length; ++i) {
  minScore += minList[i][1] * 1;
}

line.push(minScore + " " + maxScore);
console.log(line.join("\n"));
``;

//정답 코드
//오답의 이유 : line 14,15에서 정수에서 +를 붙여줘야함. 안붙여줌.
// const { readFileSync } = require("fs");
// const token = readFileSync(0, { encoding: "ascii" })
//   .split(/\s+/)
//   [Symbol.iterator]();
// const line = [];

// const studiedClass = +token.next().value; //수강한 과목수
// const needClass = +token.next().value; //필요한 과목수
// const openClass = +token.next().value; //공개된 과목수
// const classList = []; //수강한 과목리스트
// const scoreList = []; //점수리스트

// for (let i = 0; i < studiedClass; ++i) {
//   const className = token.next().value;
//   const score = +token.next().value;
//   classList.push([className, score]);
//   //여기서부터 점수계산 시작
// }
// let filteredClass = classList;
// for (let i = 0; i < openClass; ++i) {
//   const openClassName = token.next().value; //공개된 과목 이름
//   //classList에서 해당과목을 찾음.
//   //해당 과목의 점수 찾기
//   //점수를 찾아서 스코어 리스트에 넣어

//   const tempClass = classList.filter((v) => v[0] === openClassName);

//   scoreList.push(tempClass[0][1]);
//   filteredClass = filteredClass.filter((v) => v[0] !== openClassName);
//   //여기서부터 점수계산 시작
// }
// filteredClass.sort((a, b) => {
//   return a[1] - b[1];
// });

// const classCount = needClass - openClass;

// const defaultScore = scoreList.reduce((acc, cur) => acc * 1 + cur * 1);

// const maxList = filteredClass.slice(
//   filteredClass.length - classCount,
//   filteredClass.length
// );

// let maxScore = defaultScore;
// for (let i = 0; i < maxList.length; ++i) {
//   maxScore += maxList[i][1] * 1;
// }
// const minList = filteredClass.slice(0, classCount);
// let minScore = defaultScore;
// for (let i = 0; i < minList.length; ++i) {
//   minScore += minList[i][1] * 1;
// }

// line.push(minScore + " " + maxScore);
// console.log(line.join("\n"));
// ``;
