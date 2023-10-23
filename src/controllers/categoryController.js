const Category = require('../models/Category');
const express = require('express');
const router = express.Router();

// Create a new category
router.post('/categories', async (req, res) => {
  try {
    const { name, description } = req.body;
    const category = new Category({ name, description });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create a category.' });
  }
});

// Retrieve a list of categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve categories.' });
  }
});

// Update category information
router.put('/categories/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    await Category.findByIdAndUpdate(id, { name, description });
    res.status(200).json({ message: 'Category updated successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update the category.' });
  }
});

// Delete a category
router.delete('/categories/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndRemove(id);
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete the category.' });
  }
});

module.exports = router;
