//import {Users} from "./login/login-model";

var mysql = require('mysql');
let express= require('express');
let app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "aashay",
  password: "aashay",
   database : "finlok"
   
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con; 

//  var login = require('./login');
//  app.use('/login',login);
//  console.log("yes");

//  app.get("/login/getAll",(req,res)=>
// {
  
// //    let sql =" select * from sample";
// let sql = 'select * from sample where username = "Anushka"';
//     let query = con.query(sql,(err,result,fields)=>
// {
//     if(err) throw err;
//     console.log("gotch yaa !!");
//     res.send(result);
     
//     console.log(result);
//     console.log(result[0].username);

//     console.log("username"+result.username);
   

// });

// });

// app.get('/login/addpost',(req,res)=>
// {

//   var un = req.params.username;
//   var pw = req.params.password;
 
//     let sql='Insert into sample(username,password) VALUES ("jhhjhj","kjbjbhjb")';
 
//     let query= con.query(sql,(err,result)=>
// {
//     if(err) throw err;
//     console.log(result);
//     res.send("done...");
// });
// })
