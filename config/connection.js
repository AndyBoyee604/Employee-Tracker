require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: "asdf",
  database: "employeesDB"
});

connection.connect(function (err) {
  if(err) throw err;
});

module.exports = connection;