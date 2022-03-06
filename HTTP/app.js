var http = require("http");

const port = 8081;

http.createServer(function (req, res) {
    res.end("Hello World");
}).listen(port);

console.log("Servidor rodando na porta " + port);