//@ts-check
/**
 * @param {string[][]} maze
 */
function canExit(maze) {
	const START = 'S';
	const EXIT = 'E';
	const SPACE = ' ';
	const VISITED = 'V';
	const moveBases = [
		[-1, 0],
		[0, -1],
		[0, 1],
		[1, 0]
	];

	const startRowIndex = maze.findIndex(
		(row) => row.findIndex((cell) => cell === START) !== -1
	);
	const startColumnIndex = maze[startRowIndex].findIndex(
		(cell) => cell === START
	);

	maze[startRowIndex][startColumnIndex] = SPACE;

	/**
	 * @param {number} rowIndex
	 * @param {number} columnIndex
	 */
	const getNextIndices = (rowIndex, columnIndex) => {
		const moves =
			moveBases.find(([x, y]) => {
				const nextRowIndex = rowIndex + x;
				const nextColumnIndex = columnIndex + y;
				const foundCell = checkIfThereIsExit(nextRowIndex, nextColumnIndex);
				return foundCell;
			}) || [];

		return moves;
	};

	/**
	 * @param {number} rowIndex
	 * @param {number} columnIndex
	 * @returns {boolean}
	 */
	const existNextIndices = (rowIndex, columnIndex) => {
		maze[rowIndex][columnIndex] = VISITED;

		const [x, y] = getNextIndices(rowIndex, columnIndex);
		const indicesExist = x !== undefined && y !== undefined;

		return indicesExist;
	};

	/**
	 * @param {number} rowIndex
	 * @param {number} columnIndex
	 * @returns {boolean}
	 */
	const checkIfThereIsExit = (rowIndex, columnIndex) => {
		const row = maze[rowIndex] || [];
		const cell = row[columnIndex];
		const thereIsExit =
			cell !== undefined &&
			(cell === EXIT ||
				(cell === SPACE && existNextIndices(rowIndex, columnIndex)));

		return thereIsExit;
	};

	const exitWasFound = checkIfThereIsExit(startRowIndex, startColumnIndex);

	return exitWasFound;
}
