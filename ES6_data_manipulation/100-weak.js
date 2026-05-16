// Task 100: weakMap and queryAPI

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const current = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, current + 1);

  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
