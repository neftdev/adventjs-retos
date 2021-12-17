const indexCarriers = (carriers) => {
	const obj = {};
	carriers.forEach(([carrierID, packagesPerDay, subordinates]) => {
		obj[carrierID] = { packagesPerDay, subordinates };
	});
	return obj;
};

export default function countPackages(carriers, carrierID) {
	const indexedCarriers = indexCarriers(carriers);
	let accumulator = 0;
	let carrierIds = [carrierID];
	while (carrierIds.length) {
		const { packagesPerDay, subordinates } = indexedCarriers[carrierIds.pop()];
		accumulator += packagesPerDay;
		carrierIds = carrierIds.concat(subordinates);
	}
	return accumulator;
}
