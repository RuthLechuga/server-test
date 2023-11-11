const http = require('http');
const ip = require("ip");

const port = 80;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello ${ip.address()}`);
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});