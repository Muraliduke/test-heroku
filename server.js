var express = require("express");
var bodyParser = require("body-parser");
//var mongodb = require("mongodb");
var path = require('path'),
nodeMailer = require('nodemailer')
//var ObjectID = mongodb.ObjectID;
// const api = require('./server/routes/api');
const fs = require('fs');


var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
}); 


app.get('*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/index.html'))
  })
