//Conexão com o banco
const Sequelize = require("sequelize");

const sequelize = new Sequelize("sistema_cadastro_node", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}