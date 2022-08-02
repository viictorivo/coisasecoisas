const Sequelize = require ("sequelize");
const connection = require("../../database/database");
const Product = require("../Model/productModel")

const Category = connection.define('category', {
    categoria: {
        type: Sequelize.STRING, 
        allowNull: false
    }
});

Product.belongsTo(Category);
Category.hasMany(Product);

Category.sync({force: false}).then(() => {});

module.exports = Category;