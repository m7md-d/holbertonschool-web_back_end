// Task 8: cleanSet function

export default function cleanSet(set, startString) {
  const parts = [];

  if (!startString || typeof startString !== 'string' || !(set instanceof Set)) {
    return '';
  }

  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      const rest = item.slice(startString.length);
      if (rest && startString) {
        parts.push(rest);
      }
    }
  }

  return parts.join('-');
}
