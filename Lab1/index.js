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

function processData2(csvText) {
  const lines = csvText.split("\n");
  const data = lines.slice(0).map((line) => {
    const [svn_id, real_name, website, project_name] = line.trim().split(",");
    return {
      username: svn_id,
      realName: real_name,
      website: website || null,
      projectName: project_name,
    };
  });
  return data;
}

//Exercice 5

let csvData;
let pullAndAnalyzeCsv;
fetch(
  "https://thomas-veillard.fr/wp-content/uploads/2021/07/apache-contributors-projects.csv"
)
  .then((res) => res.text())
  .then((data) => {
    csvData = processData2(data);
    console.log(findFirstProjectNameInData(csvData));
    console.log(countUniqueContributors(csvData));
    console.log(averageContributorNameLength(csvData));
    console.log(mostActiveContributorName(csvData));
    console.log(top10MostConstributedProjects(csvData));
  })
  .catch((error) => {
    console.error(
      "Une erreur s'est produite lors de la récupération des données CSV :",
      error
    );
  });

//Question 1
function findFirstProjectNameInData(data) {
  const sortedProjectNames = data
    .map((item) => item.projectName)
    .sort((a, b) => {
      return a.localeCompare(b, undefined, {
        sensitivity: "base",
        ignorePunctuation: true,
      });
    });
  const firstProjectName = sortedProjectNames[0];
  return firstProjectName;
}

function groupContributionsByContributor(data) {
  const contributorMap = new Map();

  data.forEach((entry) => {
    const contributorName = entry.realName;

    if (!contributorMap.has(contributorName)) {
      contributorMap.set(contributorName, {
        name: contributorName,
        projects: [],
      });
    }

    contributorMap.get(contributorName).projects.push(entry.projectName);
  });

  return Array.from(contributorMap.values());
}

//Question 2
function countUniqueContributors(data) {
  return groupContributionsByContributor(data).length - 1;
}

//Question 3
function averageContributorNameLength(data) {
  let sum = 0;
  groupContributionsByContributor(data).forEach((contributor) => {
    sum += contributor.name.length;
  });
  return (sum / groupContributionsByContributor(data).length).toFixed(2);
}

//Question 4
function mostActiveContributorName(data) {
  let max = 0;
  let mostActiveContributorName;
  groupContributionsByContributor(data).forEach((contributor) => {
    if (contributor.projects.length > max) {
      max = contributor.projects.length;
      mostActiveContributorName = contributor.name;
    }
  });
  return mostActiveContributorName;
}

function top10MostConstributedProjects(data) {
  const projectsMap = new Map();
  data.forEach((entry) => {
    const projectName = entry.projectName;

    if (!projectsMap.has(projectName)) {
      projectsMap.set(projectName, {
        name: projectName,
        contributors: [],
      });
    }

    projectsMap.get(projectName).contributors.push(entry.realName);
  });

  return Array.from(projectsMap.values())
    .sort((a, b) => b.contributors.length - a.contributors.length)
    .slice(0, 10)
    .map((project) => project.name);
}
