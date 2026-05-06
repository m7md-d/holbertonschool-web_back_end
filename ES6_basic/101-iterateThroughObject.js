export default function iterateThroughObject (reportWithIterator) {
  let result = '';
  let sep = '';
  for (const i of reportWithIterator) {
    result += sep + i;
    sep = ' | ';
  }
  return result;
}
