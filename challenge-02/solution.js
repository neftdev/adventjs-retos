const spaces = /\s+/;

export default function listGifts(letter) {
	const gifts = letter
		.split(spaces)
		.map((gift) => gift.trim())
		.filter((gift) => gift !== '' && !gift.startsWith('_'));
	const countGifts = {};
	gifts.forEach((gift) => {
		countGifts[gift] ??= 0;
		countGifts[gift] += 1;
	});
	return countGifts;
}
