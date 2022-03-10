const Sequilize = require("sequelize");
const sequelize = new Sequilize("sistema_cadastro_node", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log("Conectado");
}).catch((error) => {
    console.log("Erro ao se conectar: " + error);
});