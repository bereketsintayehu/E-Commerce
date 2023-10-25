const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category');

// Create a new category
router.post('/categories', CategoryController.createCategory);

// Retrieve a list of categories
router.get('/categories', CategoryController.getAllCategories);

// Retrieve a category by ID
router.get('/categories/:id', CategoryController.getCategoryById);

// Update a category
router.put('/categories/:id', CategoryController.updateCategory);

// Delete a category
router.delete('/categories/:id', CategoryController.deleteCategory);

module.exports = router;
