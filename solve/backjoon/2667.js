// x좌표 y좌표 최단거리 구하기
// 1. 준비물을 준비해준다.
//     * 목표좌표 N, M
//     * 미로행렬
//     * 방문여부 [] ->확인 위해 체크
// 2. bfs 함수
//     * 파라터는 : x, y좌표
//     * dx = [-1, 0, 1, 0] / dy = [0,1,0,-1]
//     * 빈큐 queue = []
//     * 시작할때 빈 큐를 채워준다. 첫좌표 0,0으로
//     * 반복문 시작
//     * 목표 : 큐에서 요소 반환
//     * 동서남북 돌아가면서 갈 수 있는지 확인 (반복문 4까지)
//     * nx = 목표x좌표+ dx+1
//     * ny = 목표y좌표+ dy+1
//     * 0이거나, 범위를 벗어난 경우 다음 좌표이동, 1이면, queue에 좌표추가 하고, 방문여부에 추가
//    *  graph[nx][ny] = graph[target.x][target.y] + 1; //한칸씩 추가
//     * 방문여부가 결과값이 됨.
// ------- /
//네트워크 문제랑 비슷
// 1. 준비물을 준비해준다.
// 1. 지도의 크기 : 가로세로는 같다.
let N = 7;
let M = 7;
let graph = []; //단지 그래프
// [[0110100],
// [0110101],
// [1110101],
// [0000111],
// [0100000],
// [0111110],
// [0111000]]
let visited = Array.from(Array(N), () => Array(M).fill(false));
//일단 돌아

// 2. bfs 함수
const bfs = (x, y) => {
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let queue = [];
  let result = [];
  queue.push({ x, y });
  for (let i = 0; i < N; i++) {
    //큐에서 요소 반환
    let target = queue.shift();
    //동서남북 돌아가면서 갈 수 있는지 확인
    for (let j = 0; j < 4; j++) {
      //다음좌표
      let nx = target.x + dx[j];
      let ny = target.y + dy[j];
      //범위를 벗어난 경우 다음 좌표이동
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
        continue;
      }
      //1이면, queue에 좌표추가 하고, 방문여부에 추가
      if (graph[nx][ny] === 1 && visited[nx][ny] === false) {
        queue.push({ x: nx, y: ny });
        visited[nx][ny] = true;
        //같은 단지인지 확인
        result.push(graph[nx][ny]);
      }
    }
  }
};
// ---------스스로 풀어보기
const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const N = input.shift();
const arr = input.map((item) => item.split("").map(Number));
