const http = require("node:http");

const server = http.createServer(function (req, res) {
  const method = req.method;
  const path = req.url;

  switch (method) {
    case "GET":
      if (path === "/") {
        res.writeHead(200).end("Welcome to Home Page !");
      } else if (path === "/about") {
        res.writeHead(200).end("Welcome to About Page !");
      } else {
        res.writeHead(404).end("Page Not Found !");
      }
      break;

    case "POST":
      if (path === "/data") {
        res.writeHead(201).end(`Data received`);
      } else {
        res.writeHead(404).end("Page Not Found !");
      }
      break;

    default:
      res.writeHead(405).end(`${method} method not allowed !`);
  }
});

server.listen(8000, () => {
  console.log("Server is running on PORT: 8000");
});

/**
 * 
 * const server = http.createServer(function (req, res) {
  console.log(`Incomming request at: ${Date.now()}`);
  console.log(req);
  console.log(req.headers);
  res.writeHead(200);
  res.end("OK !");
});

server.listen(8000, () => console.log("Server is running on PORT: 8000"));
 * 
 */
