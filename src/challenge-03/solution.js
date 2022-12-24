/**
 * @param {string[]} packOfGifts names of gifts
 * @param {string[]} reindeers names of reindeers
 */
export function distributeGifts(packOfGifts, reindeers) {
	const REINDEER_MULTIPLE = 2;
	const giftsNames = packOfGifts.join('');
	const reindeersNames = reindeers.join('');

	const totalGiftWeight = giftsNames.length;
	const totalReindeerWeightCapacity = reindeersNames.length * REINDEER_MULTIPLE;

	const numberOfPacks = Math.floor(
		totalReindeerWeightCapacity / totalGiftWeight
	);

	return numberOfPacks;
}
