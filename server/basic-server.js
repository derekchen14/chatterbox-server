var http = require("http");
var port = 3000;
var ip = "127.0.0.1";

var server = http.createServer(handleRequest);
console.log("Server is operational on http://" + ip + ":" + port);
server.listen(port, ip);

// To start this server, run:
//     node basic-server.js

var handleRequest = function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);
  var statusCode = 200;
  var headers = defaultCorsHeaders;

  headers['Content-Type'] = "text/plain";
  response.writeHead(statusCode, headers);

  response.end("Hello, World!");
};

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};