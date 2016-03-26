var http = require('http');

// http.createServer(function(req, res) {
//   res.writeHead(200);
//   res.write("Hello, World!!!");
//   res.end();
// }).listen(3000);

http.createServer((req, res) => {
  res.writeHead(200);
  res.write("Hello, World!!!");
  res.end();
}).listen(3000);

console.log("Listening on Port 3000");
