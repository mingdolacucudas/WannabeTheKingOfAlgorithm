function solution(genres, plays) {
	var answer = [];
	//1. 많이 재생된 장르 순으로 정렬
	// 2. 장르 들끼리 많이 재생된 횟수 정렬
	//-> 많이 재생된 횟수를 어떻게 알까.
	//반복문을 돌면서 장르에 점수를 주고,
	//let 장르 점수필요없음.
	//plays를 어떻게 할것인가ㅏ.
	//반복문을 돌면서
	//반복문을 모두 돌고난 뒤에
	let genreList = {};
	for (let i = 0; i < genres.length; i++) {
		if (genreList[genres[i]]) {
			//여기서 plays 비교하자. ㅁ
			let list = genreList[genres[i]];
			let index = parseInt(list.length / 2);
			while (값이 < plays[i]) {
				genreList[genres[i]].push(i);
			}

			//이제 비교할거임 가운데부터
		} else genreScore[genres[i]] = [i];
	}
	return answer;
}

//많이 재생된 장르.
//장르내에서 많이 재생된 노래.
//재생횟수가 같은 노래 중 고유번호가 낮은 노래.
//genres : 노래의 장르 나타내는 배열 스트링배열
//plays : 노래별 재생횟수 정수배열
//answer :베스트 앨범에 들어갈 노래 고유 번호를 순서대로 리턴
// ㅑ아이디
