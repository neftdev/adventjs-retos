import { expect, test } from 'vitest';
import { fitsInOneBox } from './solution.js';

test('it returns an boolean type', () => {
	const boxes = [
		{ l: 1, w: 1, h: 1 },
		{ l: 2, w: 2, h: 2 }
	];
	const output = fitsInOneBox(boxes);

	expect(typeof output).toBe('boolean');
});

test('verify test 2', () => {
	const expected = false;
	const boxes = [
		{ l: 1, w: 1, h: 10 },
		{ l: 3, w: 3, h: 12 },
		{ l: 2, w: 2, h: 1 }
	];
	const output = fitsInOneBox(boxes);

	expect(output).toBe(expected);
});

test('verify test 3', () => {
	const expected = true;
	const boxes = [
		{ l: 1, w: 1, h: 1 },
		{ l: 2, w: 2, h: 2 }
	];
	const output = fitsInOneBox(boxes);

	expect(output).toBe(expected);
});

test('verify test 4', () => {
	const expected = false;
	const boxes = [
		{ l: 1, w: 1, h: 1 },
		{ l: 2, w: 2, h: 2 },
		{ l: 3, w: 1, h: 3 }
	];
	const output = fitsInOneBox(boxes);

	expect(output).toBe(expected);
});

test('verify test 5', () => {
	const expected = false;
	const boxes = [
		{ l: 1, w: 1, h: 1 },
		{ l: 2, w: 2, h: 2 },
		{ l: 2, w: 10, h: 2 }
	];
	const output = fitsInOneBox(boxes);

	expect(output).toBe(expected);
});

test('verify test 6', () => {
	const expected = true;
	const boxes = [
		{ l: 1, w: 1, h: 1 },
		{ l: 3, w: 3, h: 3 },
		{ l: 2, w: 2, h: 2 }
	];
	const output = fitsInOneBox(boxes);

	expect(output).toBe(expected);
});
