var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "dummy.html" );
   });
var port = 8080;

app.listen(port,function(err){
    if (err) throw err;
    console.log("listening"+ port);
});

app.get('/cookiemonster',function(req, res){
     res.cookie('flag' , 'yzpvw').send('Cookie is set');
});

