const http = require("node:http");

const server = http.createServer(function (req, res) {
  console.log("Got the incomming request");
  res.writeHead(200);
  res.end("Thanks for visiting my server");
});

server.listen(8000, function () {
  console.log("http server is up ❤️‍🩹");
});
