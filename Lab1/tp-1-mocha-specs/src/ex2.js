/**
 * Filter an array with a function.
 *
 * @param {Array <number>} array - the array to filter.
 * @param {function} predicate - the function predicate to filter the array.
 * @returns {Array <number>} - A new array containing the filtered elements.
 **/
export function filter(array, predicate) {
  if (!Array.isArray(array)) {
    throw new Error("First parameter must be an array");
  }
  if (typeof predicate !== "function") {
    throw new Error("Second parameter must be a function");
  }
  let filteredArray = [];
  for (const item of array) {
    if (predicate(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
}

var array = [1, 2, 3, 4, 5];
console.log(filter(array, (item) => item > 2)); // [3, 4 5]
