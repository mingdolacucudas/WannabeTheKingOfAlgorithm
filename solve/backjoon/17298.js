//오큰수 스택 큐
let [N, ...input] = require("fs")
	.readFileSync("test.txt")
	.toString()
	.trim()
	.split("\n");

function solution(N, input) {
	let arr = input[0].split(" ").map(Number);
	let answer = Array.from({ length: N }, () => -1); //-1 로 세팅 N만큼.
	let stack = [];
	for (let i = 0; i < N; i++) {
		//반복문을 한번만 도는게 핵심.
		while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
			answer[stack.pop()] = arr[i];
		}
		stack.push(i);
	}
	return answer.join(" ");
}
console.log(solution(N, input));
// 5 7 7 -1

function solution(prices) {
	var answer = [];
	// let arr  = array.from()
	let stack = [];
	for (let i = 0; i < prices.length; i++) {
		let second = prices.length - i;
		if (i === 0 || i < prices.length - 1) {
			answer.push(second);
			return;
		}
		//앞전의 가격보다 현재 가격이 낮다면 second 에서 -1 해준다.
		if (prices[i] > prices[i + 1]) {
			second = second - 1;
			answer.push(second);
		}
	}
	return answer;
}
