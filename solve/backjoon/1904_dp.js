//dynamic programming
//0 또는 1
//1 00
//n = 1-> 1  // n=4 -> 0011 0000 1001 1100 1111
//n이 주어졌을때 모든 가짓수
//타일은 무한히 많음
// 1 : 1
// 2 : 00
// 3 : 100 001
// 4 : 0011 0000 1001 1100 1111
// 5 : 00111 00001 00100 10000
// 6 : 000000 000011 001001 100001 110000 100100
// ------
// 1: 1
// 2: 1
// 3: 앞에 두개의 조합
// 4: 앞에 두개의 조합
// 1: 1
// 2: 1
// 3: 1 + 1 =2
// 4: 1 + 2  =3
// 5: 2 + 3 = 5
// 6: 3 + 5 = 8
// 7: 5 + 8 = 13
// 결론 n이 주어질 경우
n - 1 + (n - 2);
// n이 7
//시간초과
const test = (n) => {
	if (n === 1) {
		return 1;
	}
	if (n === 2) {
		return 1;
	}

	return test(n - 1) + test(n - 2);
};
const { readFileSync } = require("fs");
const token = readFileSync(0, { encoding: "ascii" })
	.split(/\s+/)
	[Symbol.iterator]();

const N = +token.next().value;
//한번계산한건 다시계산 안하게
let obj = {};
const test2 = (n) => {
	if (n === 1) {
		return 1;
	}
	if (n === 2) {
		return 1;
	}
	if (obj[n] === undefined) {
		obj[n] = test2(n - 1) + test2(n - 2);
	}
	return obj[n] % 15746;
};
const answer = test2(N);
console.log(answer);
