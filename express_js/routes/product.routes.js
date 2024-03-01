const express = require('express');
const productroutes = express. Router();
const { addu
} = require('../controller/product.controller');

// Create Product
productRoutes.post('/', addProduct);

// Get Single Product
productRoutes.get('/',getAllProducts);

// Get All Products
productRoutes.get('/single-product',getProduct);

// Replace Single Product
productRoutes.put('/replace-product', replaceProduct);

// Update Single Product
productRoutes.patch('/update-product', updateProduct);

// Delete Single Product
productRoutes.delete('/delete-product', deleteProduct);

module.exports = productRoutes;