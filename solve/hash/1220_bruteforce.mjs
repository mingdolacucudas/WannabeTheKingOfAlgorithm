function solution(brown, yellow) {
  var answer = [];
  let h = 3;
  //w보다 작을때까지 돌아야함.
  for (let i = 3; i < brown; i++) {
    h = i;

    let w = (brown - (h - 2) * 2) / 2;
    if ((w - 2) * (h - 2) === yellow) {
      answer = [w, h];
      return answer;
    }
  }

  return answer;
}

// brown 10
// h = 3
// (h -2)*2  // 노란줄
// 10 /2
function solution(citations) {
  var answer = 0;

  citations.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < citations.length; i++) {
    let h = citations[i];
    let w = citations.length - i;

    // let count = citations.length-h //아닌것
    // h이상 인용된 논문이 h이상
    // h이하 인용된 논문의 갯수는 h
    if (h >= w) {
      answer = w > answer ? w : answer;
    }
  }
  return answer;
}

//배열 for of
//h를 찾고싶을때 h를 다해본다.완전ㅌ탐색
