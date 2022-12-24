/**
 * return the number of extra hours that would be done during that year
 * 
 * @param {number} year
 * @param {string[]} holidays
 */
export function countHours(year, holidays) {
	const EXTRA_HOURS_BY_DAY = 2;

	const isWeekend = (holiday) => {
		const SUNDAY = 0;
		const SATURDAY = 6;
		const date = new Date(`${year}/${holiday}`);
		const valueDay = date.getDay();
		return valueDay === SUNDAY || valueDay === SATURDAY;
	};

	const numberOfHolidays = holidays.length;
	const numberOfHolidaysInWeekend = holidays.filter(isWeekend).length;
	const numberOfHolidaysInWeek = numberOfHolidays - numberOfHolidaysInWeekend;
	const extraHoursCurrentYear = numberOfHolidaysInWeek * EXTRA_HOURS_BY_DAY;

	return extraHoursCurrentYear;
}
