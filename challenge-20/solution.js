export default function pangram(letter) {
	const lowerCaseLetter = letter.toLowerCase();
	const cleanAccents = lowerCaseLetter.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	return new Set(cleanAccents.replace(/[^a-z]/g, '')).size === 26 && lowerCaseLetter.includes('ñ');
}
