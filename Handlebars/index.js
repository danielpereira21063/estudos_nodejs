const express = require("express");
const Sequelize = require("sequelize");
const app = express();
const handlebars = require("express-handlebars");

//Conexão com o banco
const sequelize = new Sequelize("sistema_cadastro_node", "root", "",{
    host: "localhost",
    dialect: "mysql"
});

//Configurando template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set("view engine", "handlebars");


app.listen(8081, () => {
    console.log("Running...");
})