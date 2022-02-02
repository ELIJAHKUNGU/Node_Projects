const http = require('http');

// res -> response 
// req -> request 
const server = http.createServer((req, res) => {
    // console.log(req);
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end("Hello world")




})
server.listen(5000)