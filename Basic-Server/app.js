var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(querystring.parse(url.parse(req.url).query)['writer'] + '');
  res.end();
}).listen(3000);

console.log("Listening on Port 3000");
