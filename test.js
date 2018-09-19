const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./simpleDB/simpledb.db');
//let sql = "SELECT  id, AuthKey FROM userInfo where id = '"+validationObject.ID+"' and AuthKey = '"+validationObject.APIKey+"' and valDate > "+moment().format("YYYY-MM-DD");
let sql = "SELECT  id, AuthKey FROM userInfo ";
//let sql = `SELECT user_no, book_no, bought_day FROM userAndBook`;

var count =0;
//var rows= db.all(sql, []);
//count=rows.length;

/* db.all(sql, [], (err, rows) => {
 if (err) {
   throw err;
 }
 count=rows.length;
 console.log(rows);
 console.log("rows length "+ rows.length);
 console.log("count length "+ count);
 rows.forEach((row) => {
  console.log(row);
   console.log(row.id, " ", row.Authkey);
 });
// return count;
//callback(count);
});  */

var rows= db.all(sql);
console.log(rows);
db.close();