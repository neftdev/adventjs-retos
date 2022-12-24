/**
 * @param {string[]} a1
 * @param {string[]} a2
 * @param {string[]} a3
 */
export function getGiftsToRefill(a1, a2, a3) {
	const gifts = [...new Set([...a1, ...a2, ...a3])];
	const includeInStore = (gift, store) => Number(store.includes(gift));
	const getNumberOfStores = (gift) => {
		return (
			includeInStore(gift, a1) +
			includeInStore(gift, a2) +
			includeInStore(gift, a3)
		);
	};

	const isInOnlyStore = (gift) => getNumberOfStores(gift) === 1;

	const giftsToRefill = gifts.filter(isInOnlyStore);
	return giftsToRefill;
}
