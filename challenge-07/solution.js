export default function contains(store, product) {
	const values = Object.values(store);
	let found;
	for (const value of values) {
		found = typeof value === 'object' ? contains(value, product) : value === product;
		if (found) return true;
	}
	return false;
}
