const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post");

var handle = exphbs.create({
    defaultLayout: "main",
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
});

//Configurando template engine
app.engine("handlebars", handle.engine);
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get("/cad", (req, res) => {
    res.render("formulario");
});

app.post("/add", (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect("/");
    }).catch((err) => {
        res.send("Houve um erro " + err);
    });
});

app.get("/deletar/:id", (req, res) => {
    Post.destroy({
        where: { 'id': req.params.id }
    }).then(() => {
        res.send("Deletado com sucesso");
    }).catch((err) => {
        res.send("Postagem não existe");
    });
});

app.get("/", (req, res) => {
    Post.findAll({ order: [['id', 'DESC']] }).then((posts) => {
        res.render("home", { posts: posts });
    });
});


app.listen(8081, () => {
    console.log("Running...");
})