import { expect, test } from 'vitest';
import { wrapping } from './solution.js';

test('it returns an array type', () => {
	const input = [];
	const output = wrapping(input);

	expect(Array.isArray(output)).toBe(true);
});

test('verify wrapping(gifts)', () => {
	const expected = ['*****\n*cat*\n*****', '******\n*game*\n******', '*******\n*socks*\n*******'];
	const gifts = ['cat', 'game', 'socks'];
	const output = wrapping(gifts);

	expect(output).toEqual(expected);
});

test('wrapping(["midu"])', () => {
	const expected = ['******\n*midu*\n******'];
	const input = ['midu'];
	const output = wrapping(input);

	expect(output).toEqual(expected);
});

test('wrapping(["a"])', () => {
	const expected = ['***\n*a*\n***'];
	const input = ['a'];
	const output = wrapping(input);

	expect(output).toEqual(expected);
});

test('wrapping an empty array should return an empty array', () => {
	const expected = [];
	const input = [];
	const output = wrapping(input);

	expect(output).toEqual(expected);
});
