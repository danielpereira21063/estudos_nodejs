const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo").then(() => {
    console.log("Sucesso");
}).catch((error) => {
    console.log("Erro: " + error);
});

//Model usuários

const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
});

mongoose.model('usuarios', UsuarioSchema);

const usuario = mongoose.model("usuarios");

new usuario({
    nome: "Daniel",
    sobrenome: "Sanches",
    email: "daniel.com",
    idade: 21,
    pais: "Brasil"
}).save().then(() => {
    console.log("Salvo com sucesso");
}).catch((err) => {
    console.log("Erro " + err);
});