//Exercice 1
/**
 * Calculates the sum of all the number.
 *
 * @param {number} num - The first number to be added.
 * @returns {number} The sum of all the numbers.
 */
export function sum(...num) {
  if (num.length === 0) {
    throw new Error("At least one number is expected");
  }
  return num.reduce((acc, val) => acc + val);
}

//console.log(sum()); // Error: At least one number is required
console.log(sum(1)); // 1
console.log(sum(1, 2, 3)); // 6
