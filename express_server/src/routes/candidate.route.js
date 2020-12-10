const express = require("express");
let router = express.Router();
const { getCadidates, } = require("../controllers/cadidates.controller");
const { authenticate } = require("../middlewares/auth.middleware");


router.get("/candidates", authenticate, getCadidates);


module.exports = router;