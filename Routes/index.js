const express = require("express");
const app = express();
const port = 8081;

app.get("/ola/:nome/:sobrenome1/:sobrenome2", (req, res) => {
    res.send("<h4>Hello " + req.params.nome.toUpperCase() + " " + req.params.sobrenome1.toUpperCase() + " " + req.params.sobrenome2.toUpperCase()) + "</h4>";
});


app.listen(port, () => {
    console.log("Running on http://127.0.0.1:" +  port);
});