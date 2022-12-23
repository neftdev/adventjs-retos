import { expect, test } from 'vitest';
import { distributeGifts } from './solution.js';

test('it returns an number type', () => {
	const packOfGifts = [];
	const reindeers = [];
	const output = distributeGifts(packOfGifts, reindeers);

	expect(typeof output).toBe('number');
});

test("verify distributeGifts(['a', 'b', 'c'], ['d', 'e'])", () => {
	const expected = 1;
	const packOfGifts = ['a', 'b', 'c'];
	const reindeers = ['d', 'e'];
	const output = distributeGifts(packOfGifts, reindeers);

	expect(output).toBe(expected);
});

test("it should return 0 if reindeers can't carry any pack: distributeGifts(['videogames', 'console'], ['midu'])", () => {
	const expected = 0;
	const packOfGifts = ['videogames', 'console'];
	const reindeers = ['midu'];
	const output = distributeGifts(packOfGifts, reindeers);

	expect(output).toBe(expected);
});

test("verify distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])", () => {
	const expected = 5;
	const packOfGifts = ['game', 'videoconsole', 'computer'];
	const reindeers = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'];
	const output = distributeGifts(packOfGifts, reindeers);

	expect(output).toBe(expected);
});

test("verify distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])", () => {
	const expected = 26;
	const packOfGifts = ['music'];
	const reindeers = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'];
	const output = distributeGifts(packOfGifts, reindeers);

	expect(output).toBe(expected);
});
