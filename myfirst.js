var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('tst');
    console.log("s");

}).listen(8080);

var a = 123;
console.log("adda");