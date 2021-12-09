const ROJO = 'rojo';

export default function contarOvejas(ovejas) {
	return ovejas.filter(({ name, color }) => {
		const lowerCaseName = name.toLowerCase();
		return color === ROJO && lowerCaseName.includes('n') && lowerCaseName.includes('a');
	});
}
