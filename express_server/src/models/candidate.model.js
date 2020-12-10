const util = require("util");
const db = require("../db/database");

async function getCadidates() {
  let getCandidateQuery = "SELECT * FROM candidate";
  db.all = util.promisify(db.all);
  return await db.all(getCandidateQuery);

}

module.exports = { getCadidates };