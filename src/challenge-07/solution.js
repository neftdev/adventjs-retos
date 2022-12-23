/**
 * @param {string[]} a1
 * @param {string[]} a2
 * @param {string[]} a3
 */
export function getGiftsToRefill(a1, a2, a3) {
	const gifts = [...new Set([...a1, ...a2, ...a3])];
	const giftsToRefill = gifts.filter((gift) => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1);
	return giftsToRefill;
}
