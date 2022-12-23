/**
 * @param {string[]} gifts
 */
export function wrapping(gifts) {
	const ASTERISK = '*';

	const createWrapper = (gift) => {
		const asteriskLength = gift.length + 2;
		const asterisk = ASTERISK.repeat(asteriskLength);

		return `${asterisk}\n*${gift}*\n${asterisk}`;
	};

	const wrapped = gifts.map(createWrapper);

	return wrapped;
}
