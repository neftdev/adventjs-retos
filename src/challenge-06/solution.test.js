import { expect, test } from 'vitest';
import { createCube } from './solution.js';

test('it returns an string type', () => {
	const size = 1;
	const output = createCube(size);

	expect(typeof output).toBe('string');
});

test('verify createCube(3)', () => {
	const expected = '  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/';
	const size = 3;
	const output = createCube(size);

	expect(output).toBe(expected);
});

test('verify createCube(1)', () => {
	const expected = '/\\_\\\n\\/_/';
	const size = 1;
	const output = createCube(size);

	expect(output).toBe(expected);
});

test('verify createCube(2)', () => {
	const expected = ' /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/';
	const size = 2;
	const output = createCube(size);

	expect(output).toBe(expected);
});

test('verify createCube(10)', () => {
	const expected =
		'         /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n        /\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n       /\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n      /\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n     /\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n    /\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n   /\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n  /\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n /\\/\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n \\/\\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n  \\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n   \\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n    \\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n     \\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n      \\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n       \\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n        \\/\\/_/_/_/_/_/_/_/_/_/_/\n         \\/_/_/_/_/_/_/_/_/_/_/';
	const size = 10;
	const output = createCube(size);

	expect(output).toBe(expected);
});
