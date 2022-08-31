const express = require ("express");
const ProductController = require ("./controllers/ProductController");
const CategoryController = require ("./controllers/CategoryController");

const routes = express.Router();

routes.post('/product', ProductController.register);
routes.get('/product', ProductController.product);

routes.post('/product/:product_id/categoria', CategoryController.product);

module.exports = routes;