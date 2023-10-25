const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product');

// Create a new product
router.post('/products', ProductController.createProduct);

// Retrieve a list of products
router.get('/products', ProductController.getAllProducts);

// Retrieve a product by ID
router.get('/products/:id', ProductController.getProductById);

// Update a product
router.put('/products/:id', ProductController.updateProduct);

// Delete a product
router.delete('/products/:id', ProductController.deleteProduct);

module.exports = router;
