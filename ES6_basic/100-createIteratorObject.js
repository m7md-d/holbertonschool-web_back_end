export default function createIteratorObject (report) {
  const employees1 = [];
  for (const item of Object.values(report.allEmployees)) {
    for (const item2 of item) {
      employees1.push(item2);
    }
  }
  return employees1;
}
