//stack을 사용하여 품. 
function solution(s) {
    let answer = true;
let stack = [] //stack에 오픈을 저장 -> close가 있으면 빼고, close가 없으면 남긴다 그래서 true or false를 분기친다. 
let length = s.length
for(let i = 0 ; i < length ; i ++) {
    //s[i]가 open일 경우 stack.push(0)
    //s[i]가 close일 경우 stack.pop()
    //stack.length가 0이라면 true 
    //예외케이스 : 닫기만 있는 경우 
    if (s[i] === '('){
        stack.push(0)
    }
    else if (s[i] === ')' && !stack.length){
        stack.push(0)
    }
    else {
        stack.pop()
    }
}
if(stack.length){
    console.log(stack.length)
    answer = false
}
    return answer;
}