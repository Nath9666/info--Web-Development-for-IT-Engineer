//Exercice 1
/**
 * Calculates the sum of all the number.
 *
 * @param {number} num - The first number to be added.
 * @returns {number} The sum of all the numbers.
 */
function sum(...num) {
  if (num.length === 0) {
    throw new Error("At least one number is required");
  }
  return num.reduce((acc, val) => acc + val);
}

console.log(sum()); // Error: At least one number is required
console.log(sum(1)); // 1
console.log(sum(1, 2, 3)); // 6

//Exerice 2
/**
 * Filter an array with a function.
 *
 * @param {Array <number>} array - the array to filter.
 * @param {function} predicate - the function predicate to filter the array.
 * @returns {Array <number>} - A new array containing the filtered elements.
 **/
function filter(array, predicate) {
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

//Exercice 3
/**
 * Map an array with a function.
 * @param {Array <number>} array - the array to map.
 * @param {function} transform - the function to apply to each element.
 * @returns {Array <number>} - A new array containing the mapped elements.
 * */
function map(array, transform) {
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

array = [1, 2, 3, 4, 5];
console.log(map(array, (item) => item * 2)); // [2, 4, 6, 8, 10]
