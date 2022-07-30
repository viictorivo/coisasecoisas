const express = require ("express");
const app = express();
const connection = require ("./database/database");
const productModel = require ("./database/Product");

connection
    .authenticate().then(() => {
    console.log("Conexão feita com o banco de dados!")
}).catch((err) => {
    console.log(err);
})

app.listen( 8080, () => {
    console.log("api rodando");
})