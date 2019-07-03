// Set up MySQL connection.
var mysql = require('mysql');
require('dotenv').config();

var env = process.env.JAWSDB_URL;
var connection;

if (env) {
  connection = mysql.createConnection(env);
} else {
  connection = mysql.createConnection({
    host: 'k2pdcy98kpcsweia.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'xbiv4bstotfs29ey',
    password: 'h6t26an1xmfikc2m',
    database: 'xly5haa284ejy44q'
  });
}
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
