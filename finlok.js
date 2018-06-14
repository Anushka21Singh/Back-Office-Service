let express= require('express');
let app = express();
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "",
        pass: ""
    }
});

const path = require("path");
let bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

var con=require('./db_exp_connection');


var login = require('./login');
app.use('/login',login);

var dashboard = require('./dashboard');
app.use('/dashboard',dashboard);

var adduserVerifyEmail = require('./adduserVerifyEmail');
app.use('/dashboard/adduseremailverification',adduserVerifyEmail);

app.listen( 2020,function () {  
     
    console.log('Example app listening ')  
    });

app.use(express.static(__dirname+'/dist'));

app.all("/*", (req,res,next) => {
    res.sendFile(path.resolve("./dist/index.html"))
})    