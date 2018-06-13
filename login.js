let express= require('express');
let app = express();
var con=require('./db_exp_connection');
var login = require('./login');



console.log("inside login.js");
app.get("/getAll",(req,res)=>
{
    console.log("inside login.js getAll");
    let username = req.query.username;
    let password = req.query.password;
    let sql ="select * from admin where Email = '"+username+"' && Password = '"+password+"'";
    let query = con.query(sql,(err,result)=>
{
    if(err) throw err;

    console.log("gotch yaa !!");
    //res.send("got the post...!!");
    var got=result.Username;
      console.log(got);

    //res.send("Username"+ got);
    console.log(result);
    //console.log("username"+result.username);
    res.json(result);
});
});

app.post('/addpost',(req,res)=>
{

  var un = req.body.username;
  var pw = req.body.password;
  var u = req.query.username;
  console.log("Inside login  :"+u+pw+"request"+req+"response"+req.body);
 
    let sql='Insert into users(username,password) VALUES ("'+req.body.username+'","'+req.body.password+'")';
 
    let query= con.query(sql,(err,result)=>
{
    if(err) throw err;
    //console.log(result);
    res.send("done...");
});
})

module.exports=app;