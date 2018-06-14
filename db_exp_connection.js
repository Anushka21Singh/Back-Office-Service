//import {Users} from "./login/login-model";

var mysql = require('mysql');
let express= require('express');
let app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "database",
   database : "finlok"
   
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con; 


