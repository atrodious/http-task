const hostname = 'http://localhost';
const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<h1>hello i am ajmat khan and i am workin at atrodious tech as a intern ! </h1>');
});
const port = 8080;
server.listen(port, () => {
  console.log(`Server running at ${hostname}:${port}`);
});
