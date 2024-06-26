//선형 탐색
//이분 탐색
//조건 1. 정령이 되어있어야함.
//조건 2. 정렬을 써야하는 경우 : 자료의 순서가 주어진다. 이 성질을 이용한다.
//조건. 선형자료구조는 인덱스가 있다. 이를 이용하자.
// 가운데를 찍고, 있어? 끝, 크다 하면 왼쪽 작다하면 오른쪽
// 몇번 찾을건지 x
// while
//반열림구간 : 구간의 길이는 r-l
//구간에 원소가 하나라도 있아ㅡ면 l이 r보다 작다.
//midpoint : 무한루프
//[true,true,true, false,false,]
function binarySearch(arr, target, start, end) {
  if (start > end) {
    return null;
  }
  let mid = Math.floor((start + end) / 2); //중간점 -> 소수점이 나올경우? 반내림
  //찾은 경우 중간점 인덱스 반환
  if (arr[mid] === target) {
    return mid;
  }
  //중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
  else if (target > arr[mid]) {
    return binarySearch(arr, target, mid + 1, end);
  } else {
    return binarySearch(arr, target, start, mid - 1);
  }
}

let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let index = binarySearch(arr, 7, 0, arr.length - 1);

//단점 : 배열이 정렬돼 이었야 함. 배열은 데이터삽입, 제거가 어려움
//삽입과제거 : 해시테이블이 빠름 많은 메모리가 필요함.
