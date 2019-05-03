const db = require("../dbConfig.js");

module.exports = {
  getActions,
  insert
};

function getActions() {
  return db("actions");
}

function insert(action) {
  return db("actions").insert(action);
}
