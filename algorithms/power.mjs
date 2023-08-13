//지수승 구하기
// 2^5 = 2 * 2 * 2 * 2 * 2 = 32
//하위문제 : 2^5 = 2 * 2^4
function power(x, n) {
  if (n == 0) return 1;
  return power(x, n - 1) * x;
}

console.log(power(2, 5));
