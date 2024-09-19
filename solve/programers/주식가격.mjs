function solution(prices) {
	var answer = [];
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

//[1, 2, 3, 2, 3]
function solution(prices) {
	const answer = new Array(prices.length).fill(0); //길이만큼 0으로 채운다.
	const stack = []; //스택배열을 만듦 -> stack역할은 index값을 저장하여 해당 인덱스로 이동할 수 있게 하는 역할
	let length = prices.length; // 길이사용.

	for (let i = 0; i < length; i++) {
		//price의 길이만큼 반복문
		while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
			//stack이 비어있지 않고, price값이 stack의 마지막 값 보다 작을때
			let temp = stack.pop(); // stack에서 마지막 값을 꺼낸다.
			answer[temp] = i - temp; // 현재 인덱스 - 이전 인덱스값 을 answer에 담아준다.
		}
		stack.push(i); //스택에 i값을 추가
	}
	while (stack.length) {
		// stack의 길이가 0이 될때까지 계속 실행. while문을 사용해야 이전에 모든 낮은 가격들에 대한 대처가 가능.
		let temp = stack.pop();
		answer[temp] = length - temp - 1; //내가 처음에 해줬던것.
	}
	//반복문 예시
	// i = 0 / stack.length =false / prices[0] = 1 / prices[stack [-1]] = undefined / stack = [0]
	// i = 1 / stack. length = true / prices[1] = 2 / prices[stack[0]] = prices[0] = 1 (이전값인셈) / stack = [0, 1]
	// i = 2 / stack.length = true/ prices[2]= 3 / prices[stack[1]] =2 / stack = [0, 1, 2]
	// i = 3 / stack.length = true / prices[3] = 2 / prices[stack[2]] 3 / while 문 통과 -> stack에서 제거 , temp = 2,  answer[2] = 3-2 = 1

	return answer;
}

//오늘 새로 알게된 사실 : length가 0이면 false임.
//while 문 : 조건문이 참일때 아래가 실행됨.if문과 다른점은 참일때까지 계속 실행. if문은 한번만 실행.
//new Array(prices.length).fill(0)
//let answer = Array.from({ length: N }, () => -1); //-1 로 세팅 N만큼.
//new Array(prices.length).fill(0)
//stack.pop() = 마지막 값을 꺼낸다.
//여기서 stack의 역할은 index값을 저장하고, pop, push를 통해 교통정리 해주는 역할
