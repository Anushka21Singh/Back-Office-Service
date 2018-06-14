var bcrypt = require('bcrypt');
const saltRounds = 10;
var myPlainPassword = "atish";

var hash = bcrypt.hashSync(myPlainPassword, saltRounds);
console.log(hash);
var match = bcrypt.compareSync("atish",hash);
console.log(match);

