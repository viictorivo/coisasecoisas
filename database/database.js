const Sequelize = require ("sequelize");
const connection = new Sequelize('coisasecoisas', 'root', 'vi123456', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;