//Exercice 4
fetch(
  "https://thomas-veillard.fr/wp-content/uploads/2021/07/apache-contributors-projects.csv"
)
  .then((res) => res.text())
  .then((data) => {
    console.log(processData1(data));
    console.log(processData2(data));
  })
  .catch(console.log);

/**
 * Process CSV data.
 * @param {string} csvText - the CSV data to process.
 * @returns {Array <Object>} - An array of objects containing the data.
 * */
function processData1(csvText) {
  const lines = csvText.split("\n");
  const data = [];

  for (let i = 0; i < lines.length; i++) {
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
