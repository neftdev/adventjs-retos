/**
 * @param {number[]} leds
 */
export function countTime(leds) {
	let seconds = 0;

	let allOn = leds.every((n) => n === 1);
	const len = leds.length;

	while (!allOn) {
		leds = leds.map((n, index) => {
			let indexPrev = index === 0 ? len - 1 : index - 1;
			if (n === 0 && leds[indexPrev] === 1) {
				return 1;
			}

			return n;
		});
		allOn = leds.every((n) => n === 1);
		seconds += 7;
	}

	return seconds;
}
