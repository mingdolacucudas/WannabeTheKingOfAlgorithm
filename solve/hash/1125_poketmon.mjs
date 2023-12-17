//좋은답?
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
///set에 대해 공부할 필요가 있다.

//내 풀이
function solution(nums) {
  var answer = 0;
  const pick = nums.length / 2;
  //pick만큼 골라야함.
  nums.sort();
  var diffNum = 0;
  nums.map((num, i) => {
    if (num !== nums[i + 1]) {
      diffNum += 1;
    }
  });
  if (diffNum > pick) {
    answer = pick;
  } else answer = diffNum;

  return answer;
}
set: 순서가 없는 중복되지 않은 데이터의 집합. 
array 차이점 
 데이터를 순서없이 저장.
 배열처럼 인덱스를 통해서 접근 불가능. 
 중복된 데이터를 저장할 수 없음.

    생성 
const set = new Set();
const numSet = new Set([1, 2, 3, 4, 5]);
 
값 추가 
set.add(10);
값 삭제 
set.delete(10);
값 확인
set.has(10); // false
값 개수 확인
set.size; // 5
전체 값 삭제
set.clear();
세트 순회 (foreach 지원)
for (let item of set) { 
    console.log(item); 
}
numSet.forEach((value) => console.log(value));

배열을 세트로 변환 
const arr = [1, 2, 3, 4, 5];
const set = new Set(arr);

세트를 배열로 변환 
const arr = [...set];

배열에서 중복 값 제거 
const arr = [1, 2, 3, 4, 5, 5, 2, 1];
const set = new Set(arr);
const uniqueArr = [...set]; // [1, 2, 3, 4, 5]
