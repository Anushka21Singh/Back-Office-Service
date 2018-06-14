let express= require('express');
let app = express();
var con=require('./db_exp_connection');
var login = require('./login');
var bcrypt = require('bcrypt');
const saltRounds = 10;

console.log("inside login.js");
app.get("/getAll",(req,res)=>
{
    console.log("inside login.js getAll");
    let email = req.query.email;
    let password = req.query.password;
    console.log(email);
    console.log(password);
    let sql ="select Email,Password,Role from admin where Email = '"+email+"'";
    let query = con.query(sql,(err,result)=> 
{
    if(err) throw err;
    console.log(result[0].Password);
    let ans = bcrypt.compareSync(password, result[0].Password);
    console.log(ans);
    result[0].Password = "null";
    if(ans){
        result[0].status = "1";
        console.log(result);
        res.json(result);
    }
    else{
        result[0].status = "0";
        res.json(result);
    }
});
});

app.post('/addpost',(req,res)=>
{

  var un = req.body.username;
  var pw = req.body.password;
  var u = req.query.username;
  console.log("Inside login  :"+u+pw+"request"+req+"response"+req.body);
 
    let sql='Insert into admin (username,password) VALUES ("'+req.body.username+'","'+req.body.password+'")';
 
    let query= con.query(sql,(err,result)=>
{
    if(err) throw err;
    //console.log(result);
    res.send("done...");
});
})

module.exports=app;