const symbols = {
	'.': 1,
	',': 5,
	':': 10,
	';': 50,
	'!': 100,
};

export default function decodeNumbers(str) {
	let sum = 0;
	let length = str.length;
	let symbol;
	for (let i = 0; i < length; i += 1) {
		symbol = symbols[str[i]];
		if (symbol) {
			symbol < symbols[str[i + 1]] ? (sum -= symbol) : (sum += symbol);
			continue;
		}
		return NaN;
	}
	return sum;
}
