const express = require ("express");
const app = express();
const connection = require ("./database/database");
const productModel = require ("./database/Product");
const productController = require("./Controller/Procuct");
const categoryController = require("./Controller/Category");

connection
    .authenticate().then(() => {
    console.log("Conexão feita com o banco de dados!")
}).catch((err) => {
    console.log(err);
})

app.use("/", productController);
app.use("/", categoryController);

app.listen( 8090, () => {
    console.log("api rodando");
})