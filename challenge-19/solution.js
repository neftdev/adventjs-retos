export default function learn(time, courses) {
	let i = 0;
	let j = 1;
	let max = { positions: null, time: 0 };
	let sumTime;
	const length = courses.length;
	while (j < length && i < length) {
		sumTime = courses[i] + courses[j];
		if (sumTime <= time && sumTime > max.time) {
			max.positions = [i, j];
      max.time = sumTime;
		}
		if (j === length - 1) {
			i += 1;
			j = i + 1;
		} else {
			j += 1;
		}
	}
	return max.positions;
}
