function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}

//이렇게 라도 했었어야 했음..ㅠㅠ
function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}
//내풀이
// 내갓 안한것 정렬을 하지 않음 정렬을 해야 똑같아짐.
//같이 돌면서 같이 비교

function solution(phone_book) {
  var answer = true;
  for (let i = 0; i < phone_book.length; i++) {
    for (let j = 0; j < phone_book.length; j++) {
      if (j === i) {
        return;
      }
      if (phone_book[j].startsWith(phone_book[i])) {
        answer = false;
      }
    }
  }
  return answer;
}
