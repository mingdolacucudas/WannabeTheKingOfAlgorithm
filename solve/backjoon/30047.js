const { readFileSync } = require("fs");
const token = readFileSync(0, { encoding: "ascii" })
  .split(/\s+/)
  [Symbol.iterator]();
const line = [];
//문제를 이해못하겠네...;;;;
const array = token.next().value.split(""); //문자열을 쪼갬.
let score = 0;
const fIndex = array.findIndex((v) => v === "f"); //g가 있는지 확인.
if (fIndex === -1) {
  line.push("-1");
  return;
}

const hasG = array[fIndex + 1] === "g";
if (!hasG) {
  line.push("-1");
  return;
}
// for (let i = 0; i < studiedClass; ++i) {
//   const className = token.next().value;
//   const score = token.next().value;
//   //여기서부터 점수계산 시작
// }

line.push(minScore + " " + maxScore);
console.log(line.join("\n"));
``;
//뒤에서 부터 보기
//"x" :함수문자열의 시작 -> 처음 은 0
//g : 마음대로 붙일 수 있음. ->  g가 나올때마다 1을 더해줌.
//f: 함수문자열
//S : 변수
//1. 함수문자열인지
//2. F가 있는지
//3. f다음이 g가있는지.
//4. x가 있는지 .
//최근걸 봐야함 -> stack
//값을 스택에 저장
//파싱은 무조건 스택
//오토마타 = 상태기계 =
//'x' 는 문자열
// 'xx': 문자열 ㄹ아님
// 두개 중 크지 않은 값으 구하라 = min
// 두개 중 작지 않은 값 = max
// 반복문으로 조건에 따라 stack. if문
//  x, xx,xxx fx
// 오토마타 마스터
//
