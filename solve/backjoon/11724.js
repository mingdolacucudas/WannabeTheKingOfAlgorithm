// n = 정점의 개수
// m = 간선의 개수
// 방향없는 그래프
// 연결요소의 개수 구하기
// m개줄의 간선의 양끝점 u와 v
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}
let visited = new Array(n + 1).fill(false);
for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split("").map(number);
  graph[from].push(to);
  graph[to].push(from);
}
function dfs(start) {
  visited[start] = true;
  for (let i = 0; i < graph[start].length; i++) {
    let next = graph[start][i];
    if (!visited[next]) dfs(next);
  }
}
let ans = 0;
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    ans++;
  }
}
console.log(ans);
