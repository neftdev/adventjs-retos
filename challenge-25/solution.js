export default function canMouseEat(direction, room) {
	const columns = room[0].length;
	const rows = room.length;
	for (let i = 0; i < rows * columns; i += 1) {
		const x = Math.floor(i / columns);
		const y = i % columns;

		if (room[x][y] === 'm') {
			switch (direction) {
				case 'up':
					return room[x - 1]?.[y] === '*';
				case 'down':
					return room[x + 1]?.[y] === '*';
				case 'left':
					return room[x][y - 1] === '*';
				case 'right':
					return room[x][y + 1] === '*';
				default:
					return false;
			}
		}
	}
	return false;
}
