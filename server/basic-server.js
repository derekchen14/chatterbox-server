var http = require("http");
var handle = require("./request-handler.js");
var port = 3000;
var ip = "127.0.0.1";

var server = http.createServer(handle);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);