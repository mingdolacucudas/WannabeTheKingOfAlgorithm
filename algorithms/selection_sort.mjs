//선택정렬
//정렬되지 않은 영역의 첫번째 원소를 시작으로 마지막 원소까지 비교

function SelectionSort(arr) {
  //마지막 원소는 자동으로 정렬됨
  for (let i = 0; i < arr.length - 1; i++) {
    let minValueIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValueIndex]) {
        //가장 작은 값이 저장됨.
        minValueIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minValueIndex];
    arr[minValueIndex] = temp;
  }
}

let arr = [4, 2, 1, 3];

console.log("===== 정렬 전 =====");
console.log(arr);

SelectionSort(arr);

console.log("===== 정렬 후 =====");
console.log(arr);
//버블정렬과 같은 성능 On2^
