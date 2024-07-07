function solution(numbers, target) {
  //numbers =[4,1,2,1]
  //target = 4
  let answer = 0; // 타겟 값을 만드는 경우의 수를 저장할 변수
  const length = numbers.length; // 숫자 배열의 길이 = 4

  // DFS를 이용한 재귀 함수
  function dfs(count, sum) {
    // 현재 카운트가 숫자 배열의 길이와 같을 때
    if (count === length) {
      // 현재 합계가 타겟 값과 같다면
      if (target === sum) {
        answer++; // 경우의 수를 증가
      }
      return; // 종료 조건
    }

    // 현재 숫자를 더하는 경우
    dfs(count + 1, sum + numbers[count]);
    // 현재 숫자를 빼는 경우
    dfs(count + 1, sum - numbers[count]);
  }

  // DFS 탐색 시작
  dfs(0, 0);

  return answer; // 타겟 값을 만드는 경우의 수 반환
}
//재귀를 이용하여 푸는것
//가장 첫번째 값을 알면 그 다음 값을 알수있는것을 이용
//재귀의 1조건 : 종룢조건을 만들어주어야함.
function solution(n, computers) {
  var answer = 0;
  const visited = {};
  //컴퓨터는 3대
  //1컴퓨터와 연결된 컴퓨터를 찾고
  //2컴퓨터와 연결된 컴퓨터를 찾고
  //3컴퓨터와 연결된 컴퓨터를 찾는다
  for (let i = 0; i < n; i++) {
    //첫번째 컴퓨터와 연결된애 찾기
    for (let j = 0; j < n; j++) {
      if (i === j) return;
      //연결이 안되어 있을 경우  네트워크 추가
      //방문했는지도 확인해야함

      if (visited[i] && computers[j][i] === 0) {
        answer += 1;
      }
      visited[i] = true;
    }
  }
  return answer;
}
