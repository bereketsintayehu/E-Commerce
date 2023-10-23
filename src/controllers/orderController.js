const Order = require('../models/Order');
const express = require('express');
const router = express.Router();

// Create a new order
router.post('/orders', async (req, res) => {
  try {
    // In a real application, you would associate the order with a user and their selected products.
    const { userId, products, total } = req.body;
    const order = new Order({ userId, products, total });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create an order.' });
  }
});

// Retrieve order details
router.get('/orders/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found.' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve order details.' });
  }
});

// Update order status
router.put('/orders/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
    if (!order) {
      return res.status(404).json({ error: 'Order not found.' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update order status.' });
  }
});

// Cancel an order
router.delete('/orders/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndRemove(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found.' });
    }
    res.status(200).json({ message: 'Order canceled successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to cancel the order.' });
  }
});

module.exports = router;
