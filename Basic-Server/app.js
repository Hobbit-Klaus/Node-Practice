var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(req.url);
  res.end();
}).listen(3000);

console.log("Listening on Port 3000");
