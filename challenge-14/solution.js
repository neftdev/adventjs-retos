export default function missingReindeer(ids) {
  const idMax = Math.max(...ids);
  for (let i = 0; i < idMax; i++) {
    if (!ids.includes(i)) {
      return i;
    }
  }
  return idMax + 1;
}
