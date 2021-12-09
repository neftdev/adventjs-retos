const underscore = '_';
const asterisk = '*';

export default function createXmasTree(height) {
	const tree = [];
	const trunk_size = 2 * height - 1;
	for (let i = 1; i <= height; i += 1) {
		const repeat_underscore = height - i;
		const repeat_asterisk = trunk_size - 2 * repeat_underscore;
		const underscores = underscore.repeat(repeat_underscore);
		const asterisks = asterisk.repeat(repeat_asterisk);
		tree.push(`${underscores}${asterisks}${underscores}\n`);
	}
	const underscores = underscore.repeat(height - 1);
	tree.push(`${underscores}#${underscores}\n`);
	tree.push(`${underscores}#${underscores}`);
	return tree.join('');
}
