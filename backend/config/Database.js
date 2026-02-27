const mysql=require('mysql')
require('dotenv').config()
var db = mysql.createConnection({
    host     :process.env.DB_HOST,
    user     :process.env.DB_USER,
    password :process.env.DB_PASSWORD,
    database :process.env.DB_DATABASE
  });
   
db.connect();

db.query('SELECT 1 + 1 AS solution', function(error, result){
    if (error) throw error;
    console.log("Mysql is connected.");
});
         
    
 

module.exports=db