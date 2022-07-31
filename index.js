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

app.post("/saveproduct", (req, res) => {
    var nome = req.body.nome;
    var tipo = req.body.tipo;
    var preco_venda = req.body.preco_venda;
    var preco_custo = req.body.preco_custo;
    var quantidade = req.body.quantidade;
    var data_compra = req.body.data_compra;
});

app.get("/listproducts", (req, res) =>{

});

app.patch("/updateproduct", (req, res) => {

})

app.delete("/product", (req, res) => {
    
})

app.listen( 8080, () => {
    console.log("api rodando");
})