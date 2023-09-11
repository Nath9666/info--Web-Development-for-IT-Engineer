//Exercice 4
fetch(
  "https://thomas-veillard.fr/wp-content/uploads/2021/07/apache-contributors-projects.csv"
)
  .then((res) => res.text())
  .then((data) => {
    parseCsvImperative(data);
    parseCsvFunctional(data);
  })
  .catch(console.log);

/**
 * Process CSV data.
 * @param {string} csvText - the CSV data to process.
 * @returns {Array <Object>} - An array of objects containing the data.
 * */
export function parseCsvImperative(csvText) {
  const lines = csvText.split("\n");
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line) {
      const [svn_id, real_name, website, project_name] = line.split(",");
      data.push({
        username: svn_id,
        realName: real_name,
        website: website || null,
        projectName: project_name,
      });
    }
  }
  return data;
}
/**
 * Process CSV data.
 *
 * @param {string} csvText - the CSV data to process.
 * @returns {Array <Object>} - An array of objects containing the data.
 * */
export function parseCsvFunctional(csvText) {
  const lines = csvText.split("\n");
  const data = lines.slice(1).map((line) => {
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
await fetch(
  "https://thomas-veillard.fr/wp-content/uploads/2021/07/apache-contributors-projects.csv"
)
  .then((res) => res.text())
  .then((data) => {
    csvData = parseCsvFunctional(data);
  })
  .catch((error) => {
    console.error(
      "Une erreur s'est produite lors de la récupération des données CSV :",
      error
    );
  });

//Question 1
/**
 * Find the first project name in the data.
 * @param {Array <Object>} data - The data to search in.
 * @returns {string} The first project name.
 * */
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

/**
 * Group contributions by contributor.
 * @param {Array <Object>} data - The data to group.
 * @returns {Array <Object>} The grouped data.
 * */
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
/**
 * Count the number of unique contributors.
 * @param {Array <Object>} data - The data to count.
 * @returns {number} The number of unique contributors.
 * */
function countUniqueContributors(data) {
  return groupContributionsByContributor(data).length;
}

//Question 3
/**
 * Calculate the average contributor name length.
 * @param {Array <Object>} data - The data to calculate.
 * @returns {number} The average contributor name length.
 * */
function averageContributorNameLength(data) {
  let sum = 0;
  groupContributionsByContributor(data).forEach((contributor) => {
    sum += contributor.name.length;
  });
  return sum / groupContributionsByContributor(data).length;
}

//Question 4
/**
 * Find the most active contributor name.
 * @param {Array <Object>} data - The data to search in.
 * @returns {string} The most active contributor name.
 * */
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

//Question 5
/**
 * Find the top 10 most contributed projects.
 * @param {Array <Object>} data - The data to search in.
 * @returns {Array <string>} The top 10 most contributed projects.
 * */
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

//Global
export function pullAndAnalyzeCsv() {
  return {
    firstProjectNameInAlphaOrder: findFirstProjectNameInData(csvData),
    numberOfUniqContributors: countUniqueContributors(csvData),
    averageContributorNameLength: averageContributorNameLength(csvData),
    mostActiveContributorName: mostActiveContributorName(csvData),
    top10MostConstributedProjects: top10MostConstributedProjects(csvData),
  };
}

console.log(pullAndAnalyzeCsv(csvData));
