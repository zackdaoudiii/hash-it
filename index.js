const { hash } = require('bcryptjs');
var express = require('express');
var app = express();
const hashIt = require('./src/services/hashit.service');


app.get('/', function (req, res) {
    let encryptedPassword = hashIt.encryptMe("zakaria");
    console.log("password : "+encryptedPassword);
    res.send("check logs");
 });

 app.get('/compare',(req,res)=>{
    let encryptedPassword = hashIt.encryptMe("zakaria");
    let passwordMatch = hashIt.compareMePlease(encryptedPassword,"zakaria");
    console.log(passwordMatch);
    res.send("check the logs please");
 });



 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 });