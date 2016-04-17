var http = require("http");
var fs = require("fs");

// 404 Error - 페이지가 없을경우
function send404Response(response) {
    response.writeHead(404, {"Content-Type":"text/plain"});
    response.write("404 Error: Opps!!!!");
    response.end();
}

// 사용자 요구에 응답 처리하기
function onRequest(request, response) {
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream("./index.html").pipe(response);
    } else {
        // 없는 파일을 찾는경우
        send404Response(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Connect Server Port 8888 ...");