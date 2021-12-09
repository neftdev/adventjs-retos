export default function isValid(letter) {
	let parenthesisCounter = 0;
	let characterCounter = 0;
	let character;
	const length = letter.length;
	for (let i = 0; i < length; i++) {
		character = letter[i];
		if (parenthesisCounter > 0 && character === ' ') {
			return false;
		} else if (character === ')') {
			parenthesisCounter -= 1;
			if (characterCounter === 0) return false;
			characterCounter = 0;
		} else if (character === '(') {
			parenthesisCounter += 1;
		} else if (parenthesisCounter > 0) {
			characterCounter += 1;
		}
	}
	return parenthesisCounter === 0;
}
