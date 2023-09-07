// Exercice 1
/*
function sum(...num) {
  if (num.length === 0) {
    throw new Error("At least one number is required");
  }
  return num.reduce((acc, val) => acc + val);
}

//console.log(sum());
console.log(sum(1));
console.log(sum(1, 2, 3));
*/

//Exerice 2
// function filter(array, predicate) {
//   if (!Array.isArray(array)) {
//     throw new Error("First parameter must be an array");
//   }
//   if (typeof predicate !== "function") {
//     throw new Error("Second parameter must be a function");
//   }
//   let filteredArray = [];
//   for (const item of array) {
//     if (predicate(item)) {
//       filteredArray.push(item);
//     }
//   }
//   return filteredArray;
// }

// const array = [1, 2, 3, 4, 5];
// console.log(filter(array, (item) => item > 2)); // [3, 4 5]

//Exercice 3
// function map(array, transform) {
//   if (!Array.isArray(array)) {
//     throw new Error("First parameter must be an array");
//   }
//   if (typeof transform !== "function") {
//     throw new Error("Second parameter must be a function");
//   }
//   let mappedArray = [];
//   for (const item of array) {
//     mappedArray.push(transform(item));
//   }
//   return mappedArray;
// }

// const array = [1, 2, 3, 4, 5];
// console.log(map(array, (item) => item * 2)); // [2, 4, 6, 8, 10]

//Exercice 4
// fetch(
//   "https://thomas-veillard.fr/wp-content/uploads/2021/07/apache-contributors-projects.csv"
// )
//   .then((res) => res.text())
//   .then(processData1)
//   .catch(console.log);

// function processData1(csvText) {
//   const lines = csvText.split("\n");
//   const data = [];

//   for (let i = 0; i < lines.length; i++) {
//     const line = lines[i].trim();
//     if (line) {
//       const [svn_id, real_name, website, project_name] = line.split(",");
//       data.push({
//         username: svn_id,
//         realName: real_name,
//         website: website || null,
//         projectName: project_name,
//       });
//     }
//   }
//   console.log(data);
//   return data;
// }

// function processData2(csvText) {
//   const lines = csvText.split("\n");
//   const data = lines.slice(0).map((line) => {
//     const [svn_id, real_name, website, project_name] = line.trim().split(",");
//     return {
//       username: svn_id,
//       realName: real_name,
//       website: website || null,
//       projectName: project_name,
//     };
//   });
//   return data;
// }

//Exercice 5
