// Task 5: createInt8TypedArray function

export default function createInt8TypedArray(length, position, value) {
  const accessor = new DataView(new ArrayBuffer(length));

  if (position >= length) {
    throw new Error('Position outside range');
  }

  accessor.setInt8(position, value);
  return accessor;
}
