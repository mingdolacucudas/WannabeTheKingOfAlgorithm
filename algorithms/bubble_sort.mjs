//무작위의 숫자를 정렬
//데이터를 옆데이터와 비교하면서 자리를 바꿈.
//성능 :for문 2개 중첩 => (n-1)+ (n-2)+(n-3)...+2+1=> O(n2^)
//장점 : 이해와 구현 간단.
//단점: 성능
function BubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

let arr = [4, 2, 3, 1];

console.log("===== 정렬 전 =====");
console.log(arr);

BubbleSort(arr);

console.log("===== 정렬 후 =====");
console.log(arr);
