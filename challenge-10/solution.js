const coins = [1, 2, 5, 10, 20, 50];

export default function getCoins(change) {
	const change_coins = [0, 0, 0, 0, 0, 0];
	while (change > 0) {
		const arr = coins.filter((coin) => coin <= change);
		const coin = arr[arr.length - 1];
		change_coins[coins.indexOf(coin)] += 1;
		change -= coin;
	}
	return change_coins;
}
