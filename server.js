var http = require("http");
var fs = require("fs");
var PORT = process.env.PORT || 8080;

function handleRequest(request, response) {
  response.end("It Works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
