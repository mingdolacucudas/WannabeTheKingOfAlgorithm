//5분
function solution(participant, completion) {
  var hashMap = new Map();
  completion.map((people, idx) => hasMap.set(people, people));
  //foreach : 리턴값이 필요없을 경우
  // const giveup = participant.map ((people, idx)=>{
  //      return people !== hashMap[people]
  //  })
  for (let i = 0; i < participant.length; i++) {
    participant[i];
  }
  //제한이 10만명. 빨리찾아야함.
  //of랑, in 사용할것.
  const finder = {};
  for (const name of completion) {
    finder[name] = true;
  }
  for (const name of participant) {
    if (!(name in completion)) return name;
  }
  return answer;
}

//5분
function solution(participant, completion) {
  //객체를 만들어서
  // participant의 key가 객체에 있는지 확인한다.
  //중복된 이름이 있을수 있음.
  let answer = "";
  let hash = {};
  for (const name of completion) {
    if (!hash[name]) {
      hash[name] = 1;
    } else hash[name] += 1;
  }
  for (const name of participant) {
    if (!hash[name]) {
      //0 , 빈문자열 모두 해당됨.
      answer = name;
    } else {
      hash[name] = hash[name] - 1;
    }
  }
  return answer;
}

//for of : array에 대한 반복
//for in : object에 대한 반복

function solution(phone_book) {
  const hashMap = {};
  var result = true;
  for (phone of phone_book) {
    //hash에 접두사를 넣는다.
    for (let len = 1; len < phone.length; ++len) {
      const prefix = phone.slice(0, len);
      hashMap[prefix] = true;
    }
  }

  for (phone of phone_book) {
    if (hashMap[phone]) {
      result = false;
      return result;
    }
  }

  return result;
}

//접두시 구하기
//   const prefix = phone.slice(0, len)
//해시맵으로 모두 집어넣기
