export default function wrapGifts(gifts) {
  const [firstGift] = gifts;
  const length = firstGift.length;
  const asterisks = '*'.repeat(length + 2);
  const wrappedGifts = [asterisks];
  gifts.forEach(gift => wrappedGifts.push(`*${gift}*`));
  wrappedGifts.push(asterisks);
  return wrappedGifts;
}
