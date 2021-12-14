const ticket_value = 12;
const percentage_value = 0.75;
const fidelity_card_value = 250;

export default function shouldBuyFidelity(times) {
	const normal_entrance = ticket_value * times;
	let discount  = 0;
	while (times > 0) {
		discount  += Math.pow(percentage_value, times);
		times -= 1;
	}
	const fidelity = fidelity_card_value + discount * ticket_value;
	return fidelity < normal_entrance;
}
