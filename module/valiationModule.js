
var dbConnector=require("./dbModule");


module.exports=function(valiationObject,callback){
    //dbConnector();
   //console.log(dbConnector.getValidtionKey(valiationObject)+ " export ");
  // var count = dbConnector.getValidtionKey(valiationObject);
   // console.log("count in validation "+ count);
   //return false;
   var rows;
    dbConnector.getValidtionKey(valiationObject,(rows)=>{
        console.log(rows + " in valitaionModule");
        callback(rows);
    });

    //console.log(rows + " rows in valitaionModule");
    

   
 /*    if (dbConnector.getValidtionKey(valiationObject)==1){
        console.log("get vali true");
        
        return true;
    }else{
        console.log("get vali false");
        return false;
    } */
    
    //return true;
};