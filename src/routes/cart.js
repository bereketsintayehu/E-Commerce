const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cart');

// Add a product to the shopping cart
router.post('/add-to-cart', CartController.addToCart);

// Retrieve the contents of the shopping cart
router.get('/shopping-cart', CartController.getShoppingCart);

// Update the quantity of a product in the cart
router.put('/update-cart/:productId', CartController.updateCartItem);

// Remove a product from the shopping cart
router.delete('/remove-from-cart/:productId', CartController.removeFromCart);

module.exports = router;
