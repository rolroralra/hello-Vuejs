var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    var parseUrl = url.parse(req.url);

    if (parseUrl.pathname == '/axiostest') {
        // res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200);
        res.end("Hello Axios!!");
    } else {
        res.writeHead(404);
        res.end("404 Error!!");
    }
}).listen(8888);

console.log("Server started http://localhost:8888");