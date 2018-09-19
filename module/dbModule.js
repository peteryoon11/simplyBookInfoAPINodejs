const sqlite3 = require('sqlite3').verbose();
let moment = require("moment");
   
// open the database
//let db = new sqlite3.Database('./simpleDB/simpledb.db');
 
/* let sql = `SELECT user_no, book_no, bought_day FROM userAndBook`;
 
db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.user_no, " ", row.bought_day);
  });
}); */
 
// close the database connection
//db.close();
//var dbConnectorModule ;

function getValidtionKey(validationObject){
  console.log(moment().format("YYYY-MM-DD")+" test");
  let db = new sqlite3.Database('./simpleDB/simpledb.db');
 let sql = "SELECT  id, AuthKey FROM userInfo where id = '"+validationObject.ID+"' and AuthKey = '"+validationObject.APIKey+"' and valDate > "+moment().format("YYYY-MM-DD");
 //let sql = `SELECT user_no, book_no, bought_day FROM userAndBook`;
 var count =0;
 //var rows= db.all(sql, []);
 //count=rows.length;

 db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  count=rows.length;
  console.log("rows length "+ rows.length);
  console.log("count length "+ count);
  rows.forEach((row) => {

    console.log(row.id, " ", row.AuthKey);
  });
 // return count;
 //callback(count);
}); 
 db.close();
  return count;
 console.log("count length >>>>>>"+ count);
 //return count;
}


function getUserValdationInfo(validationObject){
  
  let db = new sqlite3.Database('./simpleDB/simpledb.db');
  let sql = `SELECT user_no, book_no, bought_day FROM userAndBook`;
 
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("rows length "+ rows.length);
    rows.forEach((row) => {

      console.log(row.user_no, " ", row.bought_day);
    });
  });
  db.close();
  
  console.log(validationObject);
  
  console.log(validationObject);
  var temp = JSON.stringify(validationObject);
  //var temp2 = JSON.parse(validationObject);
  console.log(temp);
 // console.log(temp2);
  console.log("getUserValdationInfo");
  return false;
};


function getUserBookInfo(){
  console.log("getUserBookInfo");
};


module.exports={
  getUserValdationInfo
  ,getUserBookInfo
  ,getValidtionKey
};