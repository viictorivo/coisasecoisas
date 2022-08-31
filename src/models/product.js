const Sequelize = require ("sequelize");
const connection = require("../database/database");
const category = require("../models/category");

const Product = connection.define('product', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
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

Product.associate = (models) => {
    Product.hasMany(models.category,
      { foreignKey: 'product_id', as: 'products' });
  };

Product.sync({force: false}).then(() => {});
module.exports = Product;