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

function getValidtionKey(validationObject,callback){


  console.log(moment().format("YYYY-MM-DD")+" test");
  let db = new sqlite3.Database('./simpleDB/simpledb.db');
 let sql = "SELECT  id, AuthKey FROM userInfo where id = '"+validationObject.ID+"' and AuthKey = '"+validationObject.APIKey+"' and valDate > '"+moment().format("YYYY-MM-DD")+"'";
 //let sql = `SELECT user_no, book_no, bought_day FROM userAndBook`;
 var count =0;
 //var rows= db.all(sql, []);
 //count=rows.length;
console.log("sql = "+sql);
 db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  count=rows.length;
  console.log("rows length "+ rows.length);
  console.log("count length "+ count);
  rows.forEach((row) => {

    console.log(row.id, " ", row.Authkey);
  });
 // return count;

 callback(count);

});

 db.close();
 
 

  
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


function getUserBookInfo(validationObject,callback){
  console.log("getUserBookInfo");


  let db = new sqlite3.Database('./simpleDB/simpledb.db');

 let sql = "SELECT  eb.name , eb.ISBN , eb.forsale , "+
           "eb.price FROM ebookInfo as eb left join userAndBook as ua on eb.no=ua.book_no "+
           " where ua.user_no = (select no from userInfo where id = '"+ validationObject.ID+"' )";
 //let sql = `SELECT user_no, book_no, bought_day FROM userAndBook`;
 var count =0;
 //var rows= db.all(sql, []);
 //count=rows.length;
console.log("sql = "+sql);
 db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  var result=[];
  count=rows.length;
  console.log("rows length "+ rows.length);
  console.log("count length "+ count);
  console.log(rows);
  rows.forEach((row) => {
    result.push({No:row.no, name: row.name, ISBN: row.ISBN,ForSale:row.forsale, Price:row.price});
    console.log(row.name, " ", row.ISBN);
  });
 // return count;
 console.log("print result");
  console.log(result);
  //console.log(JSON.stringify(result));
 //callback(JSON.stringify(result));
 callback(result);
});

 db.close();
 
};


module.exports={
  getUserValdationInfo
  ,getUserBookInfo
  ,getValidtionKey
};