let express= require('express');
let app = express();
var con=require('./db_exp_connection');
var dashboard = require('./dashboard');



console.log("inside dashboard.js");
app.get("/search",(req,res)=>
{
    var value = req.query.value;
    console.log("inside dashboard.js search"+value);
    console.log("inside dashboard.js search2");
    let sql =" select * from sample where password='"+value+"'";
    let query = con.query(sql,(err,result)=>
{
    if(err) throw err;

    console.log("gotch yaa !!");
    //res.send("got the post...!!");
     var got=result.username;
 
    //res.send("Username"+ got);
    //console.log(result);
    //console.log("username"+result.username);
    res.json(result);
});
});



module.exports=app;