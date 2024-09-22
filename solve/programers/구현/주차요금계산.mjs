function solution(fees, records) {
	//fees : 요금표 기본시간/ 기본요금/단위시간 분/단위 요금
	//records: 시간, 차량번호, inout
	const parkingTime = {};
	records.forEach((r) => {
		let [time, id, type] = r.split(" "); //time: 05:34 id:5961 type: in
		let [h, m] = time.split(":"); // h: 05 m:34
		time = h * 1 * 60 + m * 1; //time = 334분
		if (!parkingTime[id]) parkingTime[id] = 0; // parkingTime { 5961 : 0 }
		if (type === "IN") parkingTime[id] += 24 * 60 - 1 - time; // 0 + (1439 - 334) 입차해서 12까지 썻다고 가정
		if (type === "OUT") parkingTime[id] -= 24 * 60 - 1 - time; //출차기록이 있을 경우 12시를 반환
	});
	const answer = [];
	for (let [car, time] of Object.entries(parkingTime)) {
		if (time <= fees[0]) time = fees[1];
		else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
		answer.push([car, time]);
	}
	return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]);
}
//새로알게된 사실 : 전형적인 구조 .
// for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   }
// Object.entries :Object.entries()는 object에 직접있는 enumerable 속성 [key, value] 쌍에 해당하는 배열을 반환합니다. 속성의 순서는 개체의 속성 값을 수동으로 반복하여 주어진 순서와 동일합니다.
