export default function canCarry(capacity, trip) {
	const length = trip.length;
	const [, firstCollectionPoint] = trip[0];
	const [, , lastDeliveryPoint] = trip[length - 1];
	let currentAmountGifts = 0;
	let [giftsToTransport, giftCollectionPoint, giftDeliveryPoint] = trip.shift();
	const deliveryPoints = [{ giftsToTransport, giftDeliveryPoint }];

	for (let point = firstCollectionPoint; point <= lastDeliveryPoint; point += 1) {
		if (point === deliveryPoints[0]?.giftDeliveryPoint) {
			currentAmountGifts -= deliveryPoints[0].giftsToTransport;
			deliveryPoints.shift();
		}

		if (point === giftCollectionPoint) {
			currentAmountGifts += giftsToTransport;
			if (trip.length !== 0) {
				[giftsToTransport, giftCollectionPoint, giftDeliveryPoint] = trip.shift();
				deliveryPoints.push({ giftsToTransport, giftDeliveryPoint });
			}
		}

		if (currentAmountGifts > capacity) {
			return false;
		}
	}
	return true;
}
