// vanila server
const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('hello world');
  response.end();
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
