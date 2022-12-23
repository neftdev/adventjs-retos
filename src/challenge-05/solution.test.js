import { expect, test } from 'vitest';
import { getMaxGifts } from './solution.js';

test('it returns an number type', () => {
	const giftsCities = [12, 3, 11, 5, 7];
	const maxGifts = 20;
	const maxCities = 3;
	const output = getMaxGifts(giftsCities, maxGifts, maxCities);

	expect(typeof output).toBe('number');
});

test('verify getMaxGifts([12, 3, 11, 5, 7], 20, 3)', () => {
	const expected = 20;
	const giftsCities = [12, 3, 11, 5, 7];
	const maxGifts = 20;
	const maxCities = 3;
	const output = getMaxGifts(giftsCities, maxGifts, maxCities);

	expect(output).toBe(expected);
});

test('verify getMaxGifts([50], 15, 1)', () => {
	const expected = 0;
	const giftsCities = [50];
	const maxGifts = 15;
	const maxCities = 1;
	const output = getMaxGifts(giftsCities, maxGifts, maxCities);

	expect(output).toBe(expected);
});

test('verify getMaxGifts([50], 100, 1)', () => {
	const expected = 50;
	const giftsCities = [50];
	const maxGifts = 100;
	const maxCities = 1;
	const output = getMaxGifts(giftsCities, maxGifts, maxCities);

	expect(output).toBe(expected);
});

test('verify getMaxGifts([50, 70, 30], 100, 2)', () => {
	const expected = 100;
	const giftsCities = [50, 70, 30];
	const maxGifts = 100;
	const maxCities = 2;
	const output = getMaxGifts(giftsCities, maxGifts, maxCities);

	expect(output).toBe(expected);
});

test('verify getMaxGifts([50, 70, 30], 100, 3)', () => {
	const expected = 100;
	const giftsCities = [50, 70, 30];
	const maxGifts = 100;
	const maxCities = 3;
	const output = getMaxGifts(giftsCities, maxGifts, maxCities);

	expect(output).toBe(expected);
});

test('verify getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)', () => {
	const expected = 100;
	const giftsCities = [50, 10, 40, 1000, 500, 200];
	const maxGifts = 199;
	const maxCities = 4;
	const output = getMaxGifts(giftsCities, maxGifts, maxCities);

	expect(output).toBe(expected);
});

test('verify getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)', () => {
	const expected = 115;
	const giftsCities = [50, 10, 40, 1000, 500, 200];
	const maxGifts = 1000;
	const maxCities = 1000;
	const output = getMaxGifts(giftsCities, maxGifts, maxCities);

	expect(output).toBe(expected);
});
