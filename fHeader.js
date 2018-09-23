var http = require('http');

http.createServer(function (req,res){
    //res.write("You might need md5");
    res.setHeader('flag','bae2881227d46a00b6b5308c02a9e8d6');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
}).listen(7000);
console.log("Listening");