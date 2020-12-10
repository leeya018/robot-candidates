const express = require("express");
let router = express.Router();
const { signup, signin } = require("../controllers/auth.controller");



router.post("/auth/signup", signup);
router.post("/auth/signin", signin);


module.exports = router;