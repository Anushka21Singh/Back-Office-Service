let express= require('express');
let app = express();
var con=require('./db_exp_connection');

var nodemailer = require("nodemailer");
rand=Math.floor((Math.random() * 100) + 54);

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
host=req.get('host');
    link="http://"+req.get('host')+"/dashboard/adduseremailverification/verify?id="+rand;
    var mailOptions={
        from: 'anushka211997@gmail.com',
        to : req.body.email,
        subject: 'jdfjkf',
        text : 'hello',
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
     }

    console.log("inside add user V");


  var role = req.body.role;
  var email = 'ukjkjjj'+role;

  console.log("Inside adduser  :"+role+email+"request"+req+"response"+req.body);
 
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

app.get('/verify',function(req,res){
    host=req.get('host');
    console.log(req.protocol+":/"+req.get('host'));
    if((req.protocol+"://"+req.get('host'))==("http://"+host))
    {
        console.log("Domain is matched. Information is from Authentic email");
        if(req.query.id==rand)
        {
            link="http://localhost:2020/dashboard/user";
            console.log("email is verified");
            res.end("<h1>Email is been Successfully verified</h1> <br> <a href= "+link+">user</href>");
        }
        else
        {
            console.log("email is not verified");
            res.end("<h1>Bad Request</h1>");
        }
    }
    else
    {
        res.end("<h1>Request is from unknown source");
    }
    });
    



module.exports=app;