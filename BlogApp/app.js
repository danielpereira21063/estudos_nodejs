const express = require("express");
const exHandleBars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const admin = require("./routes/admin");
const path = require("path");

//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//end body-parser


//handlebars
const handle = exHandleBars.create({
    defaultLayout: "main",
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
});

app.engine("handlebars", handle.engine);
app.set("view engine", "handlebars");
//end handlebars

//mongoose
mongoose.connect("mongodb://localhost/blog_app")
    .then()
    .catch(err => {
        console.log("Erro " + err);
    });
//end mongoose

//public
app.use(express.static(path.join(__dirname, "public")));
//end public

//routes
app.get("/", (req, res) => {
    res.send("Rota principal");
});


app.get("/posts", (req, res) => {
    res.send("Lista de posts");
});
app.use("/admin", admin);
//end routes


const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});