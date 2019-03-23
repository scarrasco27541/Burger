var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
	  host: "localhost",
	  port: process.env.PORT || 3306,
	  user: process.env.USER || "root",
	  password: process.env.PASSWORD || "UNC1964", // not an important password, so including it
	  database: "burgers_db"
	});
}
connection.connect(err => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});
module.exports = connection;
