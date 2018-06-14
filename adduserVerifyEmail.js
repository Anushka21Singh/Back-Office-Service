let express= require('express');
let app = express();
var con=require('./db_exp_connection');

var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "anushka211997@gmail.com",
        pass:""
    }
});

app.post('/adduserV',(req,res)=>
{
    rand=Math.floor((Math.random() * 100) + 54);
host=req.get('host');
    link="http://"+req.get('host')+"/dashboard/adduseremailverification/verify?id="+rand;
    var mailOptions={
        from: 'anushka211997@gmail.com',
        to : req.body.email,
        subject: 'jdfjkf',
        text : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
     }

    console.log("inside add user V");


  var role = req.body.role;
  var email = req.body.email;

  console.log("Inside adduser  :"+fname+lname+"request"+req+"response"+req.body);
 
    let sql='Insert into users (Email,Role) VALUES ("'+email+'","'+role+'")';
 
    let query= con.query(sql,(err,result)=>
{
    if(err) throw err;
    
    //console.log(result);
  //  res.send("done...");
});


 console.log(mailOptions);
 smtpTransport.sendMail(mailOptions, function(error, response){
 if(error){
 console.log(error);
 res.end("error");
 }else{
 console.log("Message sent: " + response.message);
 res.end("sent");
 }
 }); 
})

module.exports=app;