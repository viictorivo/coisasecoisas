const express = require("express");
const productModel = require("../models/product");
const categoryModel = require("../models/category");

module.exports = {

    async product (req, res) {
        const {product_id} = req.params;
        const {category} = req.body;
        
        const product = await productModel.findByPk(product_id);
        
        if (!product){
            return res.status(400).json({error: 'Product not found'});
        }

        const categoryCreate = await categoryModel.create({
            product_id:product_id,
            categoria:category })
        return res.json(categoryCreate);
    }
}

