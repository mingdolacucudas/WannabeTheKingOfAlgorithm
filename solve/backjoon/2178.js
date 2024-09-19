const { readFileSync } = require("fs");
const token = readFileSync(0, { encoding: "ascii" })
	.split(/\s+/)
	[Symbol.iterator]();
const [N, M] = token.shift().split(" ").map(Number); //N, M number로 교환
const map = token.map((row) => row.split("").map(Number)); //
const graph = Array.from(Array(N), () => Array(M).fill(0)); //2차원 배열을 만들어줌.
function bfs(x, y) {
	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];
	const queue = []; //빈 큐
	queue.push({
		x: 0,
		y: 0,
	}); //첫 좌표
	//   const result = [];
	//   const visited = {};
	//   visited[[x, y]] = 1;

	//visited를 몇번째 방문했는지.
	while (queue.length) {
		const target = queue.shift(); //첫번째 요소 반환
		for (let i = 0; i < 4; i++) {
			//동서남북으로 이동
			const nx = target.x + dx[i];
			const ny = target.y + dy[i];

			if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
				//0이라서 못가는 경우 혹은 범위를 벗어나는 경우
				continue;
			}
			if (map[nx][ny] !== 1) {
				//0이면 못가는 경우
				continue;
			}
			graph[nx][ny] = graph[target.x][target.y] + 1; //다음 좌표로 이동
			queue.push({ x: nx, y: ny }); //다음 좌표로 이동
		}
	}

	return map[N - 1][M - 1];
}
const answer = bfs(0, 0);
console.log(bfs(0, 0));
//미로를 2차원 배열로 만들어줌.
//1이면 가고 0이면 못가는 미로
//동서남북으로 출발
//동서남북으로 갈수 있는지 확인
//x좌표롤 tartget까지 가는데 걸리는 시간을 구함.
//y좌표로 target까지 가는데 걸리는 시간을 구함.

//--------다시 내식 으로 정리
//
