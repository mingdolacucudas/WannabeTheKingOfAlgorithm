function solution(skill, skill_trees) {
    var answer = 0;
    //stack으로 접근해보자.
    //skill은 하나의 stack
    //tree에서 skill을 찾을때마다 pop -> tree가끝났는데 stack이 안남아 있다? 그럼 +1
    for (const tree of skill_trees) {
        let stack = skill.split("")

        console.log('시작', skill)
        for (let i = 0; i < tree.length; i++) {
            console.log(tree[i])
            if (!stack.length) {
                answer += 1
            } else {
                if (tree[i] === stack[0]) {
                    stack = stack.slice(1)
                }
            }

        }
        if(stack.length){
            let temp = true
            for (let i = 0; i <stack.length; i++) {
                if(tree.includes(stack[i])){
                    temp = false
                }
            }
            if(temp){
                answer += 1
            }
        }
    }
    return answer;

}
// 개선 후
function solution(skill, skill_trees) {
    var answer = 0;

    for (const tree of skill_trees) {
        let stack = skill.split(""); // 스킬 순서대로 stack에 넣음
        let isValid = true; // 유효한 스킬 트리인지 확인

        for (let i = 0; i < tree.length; i++) {
            if (!stack.includes(tree[i])) {
                // skill에 없는 스킬은 그냥 무시
                continue;
            }

            if (tree[i] === stack[0]) {
                // 올바른 순서일 경우 스택에서 제거
                stack.shift();
            } else {
                // 순서가 틀리면 유효하지 않음
                isValid = false;
                break;
            }
        }

        if (isValid) {
            answer += 1;
        }
    }
    return answer;
}
//오늘의 깨달음  : 반복문에서 continue와 break를 적극 사용해보자.
