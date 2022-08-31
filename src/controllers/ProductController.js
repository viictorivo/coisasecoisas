
const productModel = require("../models/product");


module.exports = {

    async product (req, res){
        const product = await productModel.findAll();
        return res.json(product)
    },

    async register (req, res)  {
        const {name, category, price_sale, price_cost, amount, date} = req.body;

        const product = await productModel.create({ 
            nome:name, 
            categoria:category, 
            preco_venda:price_sale, 
            preco_custo:price_cost, 
            quantidade:amount, 
            data_compra:date});
        return res.json(product)

    }
}



