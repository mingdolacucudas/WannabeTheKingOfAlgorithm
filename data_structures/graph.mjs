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

let jake = new Vertex("jake");
let amy = new Vertex("amy");
let brian = new Vertex("brian");
let kate = new Vertex("kate");
