const mysql = require("mysql");
const mysqlClient = mysql.createConnection({
  host: "localhost",

  user: "zhalok",

  database: "cuttick",

  password: "03041959",
});

module.exports = mysqlClient;
