var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "lsdb",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE words (name VARCHAR(255), tag VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

var queryString = `INSERT INTO test (id) VALUES (${words.map((v,i) => `$${i+1}`).join('),(')}) RETURNING *`

client.query(queryString, words, (err, result) => {
  done();
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO words (name, function, dependence) VALUES ?";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});