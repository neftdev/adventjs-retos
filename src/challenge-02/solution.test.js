import { expect, test } from 'vitest';
import { countHours } from './solution.js';

test('it returns an number type', () => {
	const year = 2022;
	const holidays = [];
	const output = countHours(year, holidays);

	expect(typeof output).toBe('number');
});

test("verify countHours(2023, ['01/06', '04/01', '12/25'])", () => {
	const expected = 4;
	const year = 2023;
	const holidays = ['01/06', '04/01', '12/25'];
	const output = countHours(year, holidays);

	expect(output).toBe(expected);
});

test("verify countHours(2022, ['01/06', '04/01', '12/25'])", () => {
	const expected = 4;
	const year = 2022;
	const holidays = ['01/06', '04/01', '12/25'];
	const output = countHours(year, holidays);

	expect(output).toBe(expected);
});

test("verify countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])", () => {
	const expected = 10;
	const year = 1985;
	const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'];
	const output = countHours(year, holidays);

	expect(output).toBe(expected);
});

test("verify countHours(2000, ['01/01'])", () => {
	const expected = 0;
	const year = 2000;
	const holidays = ['01/01'];
	const output = countHours(year, holidays);

	expect(output).toBe(expected);
});
