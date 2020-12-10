
const candidateModel = require("../models/candidate.model");

async function getCadidates(req, res) {
  let candidates = await candidateModel.getCadidates();
  res.json({ success: true, candidates });
}

module.exports = { getCadidates };