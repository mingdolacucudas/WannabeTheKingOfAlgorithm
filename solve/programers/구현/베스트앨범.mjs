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
			while (plays[genreList[index]] < plays[i]) {
				//while 문이 조건에 부합하면 실행.
				let newList = genreList[genres[i]].splice(0, i);
				newList.concat();
			}
			//index가 크지 않아. 그러면

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
function solution(genres, plays) {
	let answer = [];
	let genreList = {};
	let genreScore = {};

	// 1. 장르별 총 재생 횟수 계산
	for (let i = 0; i < genres.length; i++) {
		if (!genreScore[genres[i]]) {
			genreScore[genres[i]] = 0;
		}
		genreScore[genres[i]] += plays[i];

		// 장르별로 노래의 인덱스와 재생 횟수 저장
		if (!genreList[genres[i]]) {
			genreList[genres[i]] = [];
		}
		genreList[genres[i]].push([i, plays[i]]);
	}

	// 2. 장르별로 재생 횟수가 많은 순으로 정렬
	let sortedGenres = Object.keys(genreScore).sort(
		(a, b) => genreScore[b] - genreScore[a]
	);

	// 3. 각 장르에서 노래들을 재생 횟수 순으로 정렬 (재생 횟수가 같으면 고유 번호 순으로 정렬)
	sortedGenres.forEach((genre) => {
		let songs = genreList[genre];
		songs.sort((a, b) => {
			if (b[1] === a[1]) return a[0] - b[0]; // 재생 횟수가 같으면 고유 번호 순
			return b[1] - a[1]; // 재생 횟수에 따라 내림차순 정렬
		});

		// 4. 상위 두 개의 곡만 베스트 앨범에 추가
		answer.push(songs[0][0]);
		if (songs[1]) answer.push(songs[1][0]);
	});

	return answer;
}
