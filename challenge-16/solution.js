const SYMBOLS_VALUES = {
	'.': 1,
	',': 5,
	':': 10,
	';': 50,
	'!': 100,
};

/**
 * Decode a string of symbols into a number
 * 
 * @param {string} symbols : string of symbols;
 * @returns {number} : the decode of the symbols;
 */
export default function decodeNumbers(symbols) {
	let sum = 0;
	let length = symbols.length;
	let symbolValue;
	for (let i = 0; i < length; i += 1) {
		symbolValue = SYMBOLS_VALUES[symbols[i]];
		if (symbolValue) {
			sum += symbolValue < SYMBOLS_VALUES[symbols[i + 1]] ? -symbolValue : symbolValue;
			continue;
		}
		return NaN;
	}
	return sum;
}
