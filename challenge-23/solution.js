export default function canReconfigure(from, to) {
  if (from.length !== to.length) return false;
  const map = new Map();
  for (let i = 0; i < from.length; i++) {
    let contains = map.has(from[i]);
    if (contains) {
      const value = map.get(from[i]);
      if (value !== to[i]) return false;
      continue;
    }
    contains = map.has(to[i]);
    if (contains) {
      const value = map.get(to[i]);
      if (value !== from[i]) return false;
      continue;
    }
    map.set(from[i], to[i]);
    map.set(to[i], from[i]);
  }
	return true;
}
