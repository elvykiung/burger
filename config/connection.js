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
    user: 'zhr7plgjdanxnzlc',
    password: 'g9fzsmqz6hakjo8r',
    database: 'qxs7ord2i9y8cbpu'
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
