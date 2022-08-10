const express = require ("express");
const app = express();
const connection = require ("./database/database");
const productController = require("./src/Controller/Product");
const categoryController = require("./src/Controller/Category");
const bodyParser = require('body-parser');

const categoryModel = require("./src/Model/categoryModel");
const productModel = require("./src/Model/productModel");

const cors = require("cors");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.use(cors());

connection
    .authenticate().then(() => {
    console.log("Conexão feita com o banco de dados!")
}).catch((err) => {
    console.log(err);
})

app.use("/", productController );
app.use("/", categoryController);


app.listen( 8090, () => {
    console.log("api rodando");
})