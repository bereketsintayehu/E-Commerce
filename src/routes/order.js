const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order');

// Create a new order
router.post('/orders', OrderController.createOrder);

// Retrieve a list of orders
router.get('/orders', OrderController.getAllOrders);

// Retrieve an order by ID
router.get('/orders/:id', OrderController.getOrderById);

// Update an order
router.put('/orders/:id', OrderController.updateOrder);

// Delete an order
router.delete('/orders/:id', OrderController.deleteOrder);

module.exports = router;
