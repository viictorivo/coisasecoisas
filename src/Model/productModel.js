const Sequelize = require ("sequelize");
const connection = require("../../database/database");

const Product = connection.define('product', {
    nome:{
        type:Sequelize.STRING, 
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    preco_venda: {
        type: Sequelize.DOUBLE, 
        allowNull: false
    },
    preco_custo: {
        type: Sequelize.DOUBLE, 
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER, 
        allowNull: false
    },
    data_compra: {
        type: Sequelize.DATE, 
        allowNull: false}
});


Product.sync({force: false}).then(() => {});
module.exports = Product;