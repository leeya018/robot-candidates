const db = require("../db/database");

async function getUserByEmail(email){
  return await db.get("SELECT * FROM user WHERE email=?", [email]);
}


async function getUserByUserName(username){
  return await db.get("SELECT * FROM user WHERE username=?", [username]);
}


async function addUser(username, email, hash){
  let sql = "INSERT INTO user (username,email,password) VALUES (?,?,?)";
  db.run(sql, [username, email, hash],
    (err) => {
      if (err) {
        console.error(err.message);
        throw err;
      }
    }
  );
}

module.exports = {getUserByEmail,getUserByUserName,addUser};
