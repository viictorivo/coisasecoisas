const Sequelize = require ("sequelize");
const connection = require("../database/database");
const Product = require("./product")

const Category = connection.define('category', {
    categoria: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    product_id: {
        type: Sequelize.STRING, 
        allowNull: false,
        references: { model: 'product', key: 'id'}
    }
});


Category.sync({force: false}).then(() => {});

module.exports = Category;