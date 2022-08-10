const express = require("express");
const router = express.Router();
const productModel = require("../../src/Model/productModel");

router.post("/saveproduct", (req, res) => {
    
    let {name, category, price_sale, price_cost, amount, date} = req.body.product;

    if(name != undefined || category != undefined || category != undefined ||
        price_sale != undefined || price_cost != undefined || amount != undefined || date != undefined  ){
        productModel.create({
            nome:name,
            categoria:category,
            preco_venda:price_sale,
            preco_custo:price_cost,
            quantidade:amount,
            data_compra:date
        })
    } else {
        res.sendStatus(400);
    }
    res.sendStatus(200);
}); 


router.get("/listproducts", (req, res) =>{

});

router.patch("/updateproduct", (req, res) => {

})

router.delete("/product", (req, res) => {
    
})

module.exports = router;