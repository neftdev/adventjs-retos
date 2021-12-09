export default function groupBy(collection, it) {
	const result = {};
	const isFunction = typeof it === 'function';
	collection.forEach((value) => {
		const key = isFunction ? it(value) : value[it];
		result[key] ??= [];
		result[key].push(value);
	});
	return result;
}
