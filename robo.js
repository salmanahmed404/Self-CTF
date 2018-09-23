var express = require ('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
   });

var port = 8081;
app.listen(port, function() 
{
console.log("listening" + port);
});

app.get('/robots.txt',function(req,res){
    res.sendFile( __dirname + "/" + "robots.txt" );
});