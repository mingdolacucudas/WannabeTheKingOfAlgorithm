//네트워크
//[1,1,0] -> 첫번째 네트워크의 0 번 컴퓨터와 1번 컴퓨터가 연결되어있음
//[1,1,0] -> 두번째 네트워크의 0 번 컴퓨터와 1번 컴퓨터가 연결되어있음
//[0,0,1] -> 0번, 1번 컴퓨터는 연결되어있지 않음, 2번컴퓨터만 연결
//결론 : 0번과 1번 ,2번 총 2개의 네트워크가 존재
//주의 : 한번 방문한 컴퓨터는 다시 방문하지 않음
//집합을 이용하여 풀어야함
//민지야 다시 풀어보자꾸나
function solution(n, computers) {
  var answer = 0;
  const visit = [];
  //재귀함수
  const dfs = () => {};
  for (let i = 0; i < n; i++) {
    visit[i] = false;
    if (visit[i] === false) {
      dfs(i);
      answer++;
    }
  }

  //a와 b
  //b와 c
  //a와 c는 간접연결
  //컴퓨터는 n대
  //computers[0] computers[1] 이연결? ->computers[0], computers[2]는 연결
  //computers[0].length = n
  //computers[0][0]과 같은건?
  return answer;
}
