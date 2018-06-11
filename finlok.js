let express= require('express');
let app = express();
const path = require("path");
let bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

var con=require('./db_exp_connection');


var login = require('./login');
app.use('/login',login);

var dashboard = require('./dashboard');
app.use('/dashboard',dashboard);

app.listen( 2020,function () {  
    
    console.log('Example app listening ')  
    });

app.use(express.static(__dirname+'/dist'));

app.all("/*", (req,res,next) => {
    res.sendFile(path.resolve("./dist/index.html"))
})    