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
//app.use(express.static(__dirname + '/public'));


// Handle uploads through Flow.js
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
var dbModule=require("./dbModule");
var dbModulev2 = require("./module/dbModule");
function getMyBookFun(req, res) {
    


    console.log("test log");
    dbModule();
    dbModulev2();
    //res.write
    res.status(400).send('400');
    return;
    /* 
    
    logger.info("now connect?  : UploadPsynet ");
    
    if (false == AuthUrlPsynet(req)) {
        res.status(400).send('400');
        return;
    }
    var user = req.query.user;
    var path = req.query.path;
    var passwd = req.query.passwd;
    var remote_path = path.replace(new RegExp('[/]+', 'g'), '/'); // user should be included to path? it depends on the configuration of ftp server!!

    if (undefined == remote_path || 0 == remote_path.length) {
        res.status(403).send('403');
        return;
    }
    logger.info("remote_path : " + remote_path);
    var ftpclient = new NimbusFtpClient(user, passwd, config.ftp_server.host, config.ftp_server.port, logger, function(err) {
        if (err) {
            UploadResultPsynet(res, false);
            return;
        } 
        ftpclient.upload(remote_path, req, function(result) {
            UploadResultPsynet(res, result);
        });
    });
    req.on('aborted', function(err, socket) {
        logger.info("Client aborted");
        ftpclient.close();
        var ftpclient2 = new NimbusFtpClient(user, passwd, config.ftp_server.host, config.ftp_server.port, logger, function(err) {
            ftpclient2.delete(remote_path, function(err) {});
            UploadResultPsynet(res, false);
        });
    });
    req.on('abort', function(err, socket) {
        logger.info("Client aborted");
        ftpclient.close();
        var ftpclient2 = new NimbusFtpClient(user, passwd, config.ftp_server.host, config.ftp_server.port, logger, function(err) {
            ftpclient2.delete(remote_path, function(err) {});
            UploadResultPsynet(res, false);
        });
    });

    logger.info("done : UploadPsynet "); */
}
