export default function getMinJump(obstacles) {
	const maxPositionObstacle = Math.max(...obstacles);
	let distance = 1;
  let iterator = 0;
  while (iterator <= maxPositionObstacle) {
    if (obstacles.includes(iterator)) {
      iterator = 0;
      distance++;
    }
    iterator += distance;
  }
  return distance;
}
