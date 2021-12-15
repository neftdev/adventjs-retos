export default function checkSledJump(heights) {
	const maxHeight = Math.max(...heights);
	const length = heights.length;
	let height = heights[length - 1];

	if (maxHeight === height) return false;

	let prevHeight = 0;
	let comp = 1;
	let ok;

	for (let i = 1; i < length; i++) {
		height = heights[i];
		prevHeight = heights[i - 1];
		if (prevHeight === maxHeight) comp = -1;
		ok = comp === 1 ? height - prevHeight > 0 : prevHeight - height > 0;
		if (!ok) return false;
	}
	return true;
}
