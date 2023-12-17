좋은 답
function solution(phoneBook) {
    return !phoneBook.sort().some((t,i)=> {
        if(i === phoneBook.length -1) return false;

        return phoneBook[i+1].startsWith(phoneBook[i]);        
    })
}

내답 
정답이지만, 시간초과 
function solution(phone_book) {
    var answer = true;
    // phone_book.map((phone, i)=> {
    //     let length = phone.length
    //  phone_book.map((item,idx) =>{
    //      if(i === idx){
    //          return
    //      }
    //      if(item.startsWith(phone)){
    //          answer = false
    //      }
    //  })
    // })
     for (let i = 0; i < phone_book.length; i++) {
    for (let j = 0; j < phone_book.length; j++) {
      if (j === i) {
      }else
      if (phone_book[j].startsWith(phone_book[i])) {
        answer = false;
      }
    }
     }
    return answer;
}

https://school.programmers.co.kr/learn/courses/30/lessons/42577
여기서 배우는 해시맵 
맵: 키와 값의 쌍으로 이루어진 자료구조
해시맵: 키와 값의 쌍으로 이루어진 자료구조, 키를 해시함수를 통해 해시값으로 바꾸어 저장하는 자료구조
키와 값을 매핑하기 위해 해시라는걸 사용 

// 해시문제 푸는법 
test = {}
    test["a"] = 1
    "a" in test // true

//이게정석인듯하다. 
function solution(phone_book) {
    const hashMap = {};

    phone_book.forEach((v)=>{
        hashMap[v] = 1;
    })

    for(let phoneNumber of phone_book){
        let temp = "";

        for(let number of phoneNumber){
            temp += number;

            if(hashMap[temp] && temp != phoneNumber){
                return false;
            }
        }
    }

    return true;
}


내답 
function solution(phone_book) {
  const hashMap = {};
let result= true
  phone_book.forEach((v)=>{
      hashMap[v] = 1;
  })
for (let i = 0; i < phone_book.length; i++) {
      for (let j = 1; j < phone_book[i].length; j++) {
          const prefix = phone_book[i].slice(0, j);
          if (hashMap.hasOwnProperty(prefix)) {
             result = false
          }
      }
  }

  return result;
}