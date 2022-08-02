const express = require("express");
const router = express.Router();

router.post("/saveproduct", (req, res) => {
    var nome = req.body.nome;
    var tipo = req.body.tipo;
    var preco_venda = req.body.preco_venda;
    var preco_custo = req.body.preco_custo;
    var quantidade = req.body.quantidade;
    var data_compra = req.body.data_compra;
});


router.get("/listproducts", (req, res) =>{

});

router.patch("/updateproduct", (req, res) => {

})

router.delete("/product", (req, res) => {
    
})

module.exports = router;