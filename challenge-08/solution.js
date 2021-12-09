export default function maxProfit(prices) {
	const last = prices.pop();
	const min = Math.min(...prices);
	const indexMin = prices.indexOf(min);
	prices.push(last);
	const max = Math.max(...prices.slice(indexMin + 1));
	const result = max - min;
	return result > 0 ? result : -1;
}
