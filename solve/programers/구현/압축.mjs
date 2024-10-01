function solution(msg) {
    let dictionary =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var answer = [];
    let temp = msg // 입력 입력에서 처리되지 않은 글자가 없을때까지
//현재 입력과 일치하는 가장 긴 문자열

    while(temp.length != 0){
        let w = temp
        let c = ''
        while(!dictionary.includes(w)){
            w = w.slice(0, w.length-1)
        }
        //2. 색인번호출력
        let index = dictionary.findIndex((item)=>item ===w)
        answer.push(index+1)
        //3.입력에서 w 제거
        temp = temp.slice(w.length);
        //4. 처리되지 않은 다음 글자가 남아있니
        if(temp.length !=0){
            c = temp.slice(0,1)
        }
        dictionary.push(w+c)
//5. 2단계로 돌아가기
    }
    return answer;
}