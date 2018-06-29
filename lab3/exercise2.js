const http = require('http');
const fs = require('fs');


//test 1
var myServer = http.createServer();

myServer.on('request', (req, res)=>{
    fs.readFile('test.jpg', (err, data)=>{
    res.writeHead(200,{'Content-Type' : 'image/jpg'});
    res.write(data);
    res.end();
    });
});
myServer.listen(6060);


/*
//test 2
http.createServer((req, res)=>{
    fs.readFile('test.jpg', (err, data)=>{
    res.writeHead(200,{'Content-Type' : 'image/jpg'});
    res.write(data);
    res.end();
    });
}).listen(7070);



//test 3
http.createServer((req, res)=>{
    fs.createReadStream('test.jpg').pipe(res);
}).listen(9090);
*/