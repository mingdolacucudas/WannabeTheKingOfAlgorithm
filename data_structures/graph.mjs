그래프;
정점;
간선;
인접;
이웃;
class Vertex {
  constructor(value) {
    this.value = value;
    this.adjacent_vertexs = []; //정점에 인저한 정점들
  }
  addAdjacent(vertex) {
    //sns 팔로우 기능
    this.adjacent_vertexs.push(vertex);
  }
  removeAdjacent(vertex) {
    //언팔기능
    this.adjacent_vertexs = this.adjacent_vertexs.filter((v) => v !== vertex);
  }
}

function DFS(vertex, visited_vertices = new Set()) {
  //vertex : 정점, visited : 방문한 정점
  //깊이우선탐색

  visited_vertices[vertex.value] = true; //현재 정점.
  console.log(vertex.value);
  for (let adjacent of vertex.adjacent_vertexs) {
    if ((visited_vertices[adjacent.value] = true)) {
      //이미방문
      continue;
    } else {
      DFS(adjacent, visited_vertices);
    }
  }
}

//방문한 정점으로 저장하고 방문한 정점을 큐에 삽입
// 큐에서 dequeue
// dequeue한 정점의 인접한 정점을 순회.
function BFS(vertex) {
  let queue = []; //빈 큐 생성
  let visited_vertices = []; //방문한 정점을 저장할 객체 생성
  queue.push(vertex);

  while (queue.length > 0) {
    //큐가 빌때까지 반복
    let current = queue.shift();
    if (visited_vertices[current.value]) {
      continue;
    }
    console.log(current.value);
    visited_vertices[current.value] = true;
    for (let adjacent of current.adjacent_vertexs) {
      queue.push(adjacent);
    }
  }
}
//성능은 동일
//DFS : 재귀함수로 구현
//BFS : 큐로 구현
// sns친구기능: 지인의 지인의 지인 - DFS / 친구의 친구들 - BFS -> bfs 가 적합
// 그래프의 끝에있는 애들은 마지막에 도착.
// 더 빨리 찾을 수 있는지 고민

가중그래프;
