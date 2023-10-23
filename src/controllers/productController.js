const Product = require('../models/Product');
const Category = require('../models/Category');
const express = require('express');
const router = express.Router();

// Create a new product
router.post('/products', async (req, res) => {
  try {
    const { name, description, price, categoryId } = req.body;

    // Check if the category with the given categoryId exists
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(400).json({ error: 'Category not found' });
    }

    const product = new Product({ name, description, price, category: category._id });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create a product.' });
  }
});

// Retrieve a list of products with populated category information
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products.' });
  }
});

// Update product information
router.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, categoryId } = req.body;

    // Check if the category with the given categoryId exists
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(400).json({ error: 'Category not found' });
    }

    await Product.findByIdAndUpdate(id, { name, description, price, category: category._id });
    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update the product.' });
  }
});

// Delete a product
router.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndRemove(id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete the product.' });
  }
});

module.exports = router;
