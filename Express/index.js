const express = require("express");
const app = express();
const port = 8081;

app.get("/", (req, res) => {
    res.send("<h3>Hello World</h3>");
})

app.get("/message", (req, res) => {
    res.send("Wellcome!!! Está é uma mensagem");
});

app.listen(port, ()=> {
    console.log(`\nServer is running on port ${port}`);
});
