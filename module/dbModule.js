const sqlite3 = require('sqlite3').verbose();
 
// open the database
let db = new sqlite3.Database('./simpleDB/simpledb.db');
 
let sql = `SELECT user_no, book_no, bought_day FROM userAndBook`;
 
db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.user_no, " ", row.bought_day);
  });
});
 
// close the database connection
db.close();

module.exports=db;