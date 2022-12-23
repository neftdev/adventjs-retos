/**
 * @param {number} size
 */
export function createCube(size) {
	const space = ' ';
	const upperLeftPatter = '/\\';
	const upperRightPattern = '_\\';
	const lowerLeftPatter = '\\/';
	const lowerRightPattern = '_/';
	const topRightPart = upperRightPattern.repeat(size);
	const lowerRightPart = lowerRightPattern.repeat(size);
	const result = [];
	const numberOfRows = size * 2;

	const createCubeRow = (sizeRow, leftPatter, rightPart) => {
		const row = `${leftPatter.repeat(sizeRow)}${rightPart}`;
		const numberOfSpaces = size - sizeRow;
		const spaces = space.repeat(numberOfSpaces);

		return `${spaces}${row}`;
	};

	for (let rowNumber = 1; rowNumber <= numberOfRows; rowNumber += 1) {
		const isTopPart = rowNumber <= size;
		const sizeRow = isTopPart ? rowNumber : numberOfRows - (rowNumber - 1);
		const row = isTopPart
			? createCubeRow(sizeRow, upperLeftPatter, topRightPart)
			: createCubeRow(sizeRow, lowerLeftPatter, lowerRightPart);

		result.push(row);
	}

	return result.join('\n');
}
