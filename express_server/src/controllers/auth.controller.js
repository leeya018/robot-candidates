const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db/database");
const util = require("util");
const userModel = require("../models/user.model");


async function signup(req, res) {
  let { username, email, password } = req.body;
  if (username == undefined || email == undefined || password == undefined) {
    res.status(400).json({ message: "All fields need to be supplied" });
    return;
  }
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  db.get = util.promisify(db.get);

  let userExists = await userModel.getUserByEmail(email);
  if (userExists) {
    res.status(400).json({ message: "User is allready exists in Db" });
    return;
  }
  await userModel.addUser(username, email, hash);

  res.status(200).json({ success: true });
}

async function signin(req, res) {
  let { username, password } = req.body;
  if (!username || !password) res.json({
    status: 400,
    errMessage: "You need to feel all fields"
  });
  db.get = util.promisify(db.get);
  let result = await userModel.getUserByUserName(username);
  if (!result) {
    res.status(400).json({
      message: "Username does not exists"
    });
    return;
  }
  let isMatch = bcrypt.compareSync(password, result.password);
  if (!isMatch) {
    res.status(401).json({
      message: "Wrong password"
    });
    return;
  }
  let token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour expiration
    email: result.email,
  }, process.env.PRIVATE_KEY);
  res.status(200).json({
    message: "You are logged in",
    token: "Bearer " + token
  });

}

module.exports = { signup, signin };



