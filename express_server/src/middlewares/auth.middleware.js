const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticate(req, res, next) {
  let auth = req.headers.authorization;
  let token = auth.split(" ")[1];
  jwt.verify(token, process.env.PRIVATE_KEY, (err) => {
    if (err) {
      res.status(401).json({ message: err.message });
      return;
    }
  });
  next();
}

module.exports = { authenticate };