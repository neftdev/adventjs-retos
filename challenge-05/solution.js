const christmas_date = new Date('Dec 25, 2021');
const day = 1000 * 60 * 60 * 24;

export default function daysToXmas(date) {
	const diff = (christmas_date - date) / day;
	return Math.ceil(diff);
}
