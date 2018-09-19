/* const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */
//var express = require('express');
var express = require('express');
var http = require('http');
var config = require('./config.json');
var app = express();
var logger;

var bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var server = http.createServer(app);
server.listen(config.server.server_port, function() {
  //  console.log("port number = "+config.server.server_port);
   //logger.info("server listening on worker id : #" + process.pid);
   console.log(config.server.server_port);
    console.log("server listening on worker id : #" + process.pid);
});


/* app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}); */

app.put('/getMyBook', getMyBookFun);

var dbModulev2 = require("./module/dbModule");
var validationModule= require("./module/valiationModule");


function getMyBookFun(req, res) {
    


    console.log("test log");
   // dbModule();
   // dbModulev2.getUserValdationInfo();
    //res.write
    const {} = req;

    const { headers,body } = req;
const userAgent = headers['user-agent'];
//res.setHeader("Content-Type", "text/html");
   
    console.log(req.body.ID);
    console.log(req.body.APIKey);

    var validationObject ;//=new Object();
    
    validationObject={"ID":req.body.ID,"APIKey":req.body.APIKey};
    //validationObject.APIKey=;
   // console.log(JSON.parse(req.body));
   // console.log(req)
    //console.log(JSON.parse(req.body));

    console.log(userAgent + " userAgent");

    req.accepts('application/json');
//validationModule(validationObject);
  //  if(dbModulev2.getUserValdationInfo(validationObject)){
       var Result=new Object();
    
       validationModule(validationObject,(rows)=>{
           if(rows==1){
            dbModulev2.getUserBookInfo(validationObject,(bookInfo)=>{
                console.log("====================");
                console.log(bookInfo);
                res.json({"code":200,"message":"Respond Success","data":bookInfo});

            });
            
           }else{
            res.json({"code":403,"message":"Invalid Auth key or Expire key","data":null});       
           }
       });
    
    /* if(false == validationModule(validationObject) ){
        res.json({"code":403,"message":"Invalid Auth key or Expire key","data":null});
    } */

    /* validationModule(validationObject,(count)=>{
        console.log("count "+count);
    });
 */
/* 
    if(validationModule(validationObject,()=>{
        console.log("callback is call");
    })){
        //res.json({result:"success"});
       Result.Code=200;
       Result.Message="Respond Success";
       Result.Data="";
        res.json(Result);


    }else{
        res.json({result:"success"});

    } */

//req.setHeader("Content-Type", "text/html");
    //response.setHeader("Content-Type", "text/html");

    // input message handling

    //json = req.body;

   // console.log('name is :'+json.name);

    //console.log('address is :'+json.address);

 

}
