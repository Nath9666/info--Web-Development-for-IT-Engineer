export function map(array, transform) {
  if (!Array.isArray(array)) {
    throw new Error("First parameter must be an array");
  }
  if (typeof transform !== "function") {
    throw new Error("Second parameter must be a function");
  }
  let mappedArray = [];
  for (const item of array) {
    mappedArray.push(transform(item));
  }
  return mappedArray;
}

let array = [1, 2, 3, 4, 5];
console.log(map(array, (item) => item * 2)); // [2, 4, 6, 8, 10]
