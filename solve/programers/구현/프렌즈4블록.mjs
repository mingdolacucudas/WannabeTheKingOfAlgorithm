function solution(m, n, board) {
    var answer = 0;
    //list = 0 지워지는 리스트
    //m * n board
    //사각형으로 같은게 있는지 확인.
    //있을 경우 보드에서 제거
    let tempBoard = board
    for (let i = 0; i < m; i++) {
        // console.log(board[i])
        for (let j = 0; j < n; j++) {
            // console.log(board[i][j])
            //나 = board[i][j]
            //옆에 = board[i][j+1] && j+1 < n
            //아래 = board[i+1][j] && i+1 < m
            //옆에아래 = board[i+1][j+1] && && j+1 < n && && i+1 < m
            //이게 모두 같을때
            if (j + 1 < n && i + 1 < m) {
                if (tempBoard[i][j] === tempBoard[i][j + 1] && tempBoard[i][j] === tempBoard[i + 1][j] && tempBoard[i][j] === tempBoard[i + 1][j + 1]) {
//이제 찾았어 그러면 어떻게 해야 할까 /*/**/*/
                    //찾았으니깐 다음애를 실행시켜줘야하는데
                    console.log('이거')
                }
            }
        }
    }
    return answer;
}

// board[i][j] === board[i][j+1] === board[i+1][j]처럼 작성하면 JavaScript는 먼저 board[i][j] === board[i][j+1]를 평가하고, 그 결과가 true 또는 false가 됩니다. 이후 그 true 또는 false 값을 board[i+1][j]와 비교하게 됩니다. 즉, 두 값이 같다는 평가 후에 논리적 비교가 일어나지 않고, 논리적으로 엉뚱한 비교가 됩니다.
// if (board[i][j] === board[i][j+1] &&
//     board[i][j] === board[i+1][j] &&
//     board[i][j] === board[i+1][j+1]) {
//     // 이 안에서 처리
// }
//답안

function solution(m, n, board) {
    let arr = [];
    let removedBlockNum = 0; //삭제된 블럭

    // 각 문자열 배열 만들기
    board.forEach((char) => arr = [...arr, char.split('')]);

//do while문을 사용하여 반복문을 돌림: do (실행) while (조건) -> 최초실행 -> 조건확인 -> 조건이 참이면 실행 -> 조건이 거짓이면 종료
    do {
        var prevBlockNum = removedBlockNum;

        let arrIdx = [];  // 좌표 배열

        // 같은 블록 좌표 구하기
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (arr[i][j] === arr[i][j + 1]
                    && arr[i][j] === arr[i + 1][j]
                    && arr[i][j] === arr[i + 1][j + 1]) {

                    arrIdx = [...arrIdx, [i, j], [i, j + 1], [i + 1, j], [i + 1, j + 1]];
                }
            }
        }

        const filteredStrings = new Set(arrIdx.map(arr => JSON.stringify(arr)));  // string 변경 및 필터링
        const toArrIdx = [...filteredStrings].map(str => JSON.parse(str));  // 배열로 다시 변경

        toArrIdx.filter(x => arr[x[0]][x[1]] = ' ');  // 블록 삭제

        for (let k = 0; k < m; k++) {  // 위에 블록이 밑으로 이동 안했을 경우 대비해서 다시 한번씩 row만큼 스캔
            for (let i = 0; i < m; i++) {
                let temp;
                for (let j = 0; j < n; j++) {
                    if (arr[i][j] === ' ') {
                        if (!arr[i - 1]) continue;  // 에러 예외 처리
                        temp = arr[i - 1][j];
                        arr[i - 1][j] = arr[i][j];
                        arr[i][j] = temp;
                    }
                }
            }
        }

        removedBlockNum = 0;

        arr.forEach(x => removedBlockNum += x.filter(y => y === ' ').length);

    } while (prevBlockNum != removedBlockNum); // 이전 삭제 블록 갯수랑 다르면 계속 반복

    return removedBlockNum;
}
