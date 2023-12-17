function solution(sizes) {
  var answer = 0;
  var widthList = [];
  var heightList = [];
  var width = 0;
  var height = 0;
  for (size of sizes) {
    size.sort((a, b) => a - b);
    widthList.push(size[1]);
    heightList.push(size[0]);
    // if(size[1]> width){
    //     width = size[0]
    // }
    // if(size[0]> width){
    //     width = size[0]
    //
  }
  answer = Math.max(...widthList) * Math.max(...heightList);

  //정렬됨.
  //큰수를 찾기
  //몇번째 애가 클까
  return answer;
}

//1. 가장큰수를 왼쪽에
//2. 작은수를 오른쪽에
//왼쪽에서 제일큰수, 오른쪽에서 제일큰수

let lm = 0,
  rm = 0;
for (let [a, b] of sizes) {
  lm = Math.max(lm, Math.min(a, b));
  rm = Math.min(lm, Math.max(a, b));
}

function solution(answers) {
  var answer = [];
  let first = 0,
    second = 0,
    third = 0;
  let firstAnswer = [1, 2, 3, 4, 5];
  let secondAnswer = [2, 1, 2, 3, 2, 4, 2, 5];
  let thirdAnswer = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let firstCount = answers.length / firstAnswer.length + 1;
  console.log(firstCount);
  let secondCount = answers.length / secondAnswer.length + 1;
  let thirdCount = answers.length / thirdAnswer.length + 1;

  for (let i = 0; i < firstCount; i++) {
    firstAnswer = firstAnswer.concat([1, 2, 3, 4, 5]);
  }
  for (let i = 0; i < secondCount; i++) {
    secondAnswer = secondAnswer.concat([2, 1, 2, 3, 2, 4, 2, 5]);
  }
  for (let i = 0; i < thirdCount; i++) {
    thirdAnswer = thirdAnswer.concat([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);
  }
  //1번이 몇문제

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === firstAnswer[i]) first++;
    if (answers[i] === secondAnswer[i]) second++;
    if (answers[i] === thirdAnswer[i]) third++;
  }
  //점수계산
  let maxResult = Math.max(first, second, third); //[11,12,15]  => [3]
  console.log(maxResult);
  console.log(first, second, third);
  if (first === maxResult) {
    answer.push(1);
  }
  if (second === maxResult) {
    answer.push(2);
  }
  if (third === maxResult) {
    answer.push(3);
  }
  return answer;
}
