export default function sumPairs(numbers, result) {
	const length = numbers.length;
	let currentNumber;
	let arrResult;
	let foundIndex;
	for (let i = 0; i < length; i += 1) {
		currentNumber = numbers[i];
		foundIndex = numbers.findIndex((number, index) => {
			return index !== i && number + currentNumber === result;
		});
		arrResult = foundIndex !== -1 ? [currentNumber, numbers[foundIndex]] : [];
		if (arrResult.length > 0) {
			return arrResult;
		}
	}
	return null;
}
