const Sequelize = require("sequelize");
const sequelize = new Sequelize("sistema_cadastro_node", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

const Postagem = sequelize.define("postagens", {
    titulo: {
        type: Sequelize.STRING,
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});


// Usuario.create({
//    nome: "Daniel",
//    sobrenome: "Pereira Sanches",
//    idade: 21,
//    email: "danielsanches6301@gmail.com"
// });

// Postagem.create({
//     titulo: "Ler faz bem pra vida",
//     conteudo: "Se você ler uma vez ao dia, poderá viver por mais de 1000 anos."
// });


// Postagem.sync({ force: true });
// Usuario.sync({force: true});