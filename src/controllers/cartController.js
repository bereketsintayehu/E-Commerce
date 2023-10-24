const express = require('express');
const router = express.Router();

const shoppingCart = [];

router.post('/add-to-cart', (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = { id: productId, name: 'Product Name', price: 10.99 };
    shoppingCart.push({ product, quantity });
    res.status(201).json({ message: 'Product added to the cart' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to add the product to the cart.' });
  }
});

router.get('/shopping-cart', (req, res) => {
  try {
    res.status(200).json(shoppingCart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve shopping cart contents.' });
  }
});

router.delete('/remove-from-cart/:productId', (req, res) => {
  try {
    const { productId } = req.params;
    const index = shoppingCart.findIndex(item => item.product.id === productId);
    if (index !== -1) {
      shoppingCart.splice(index, 1);
      res.status(200).json({ message: 'Product removed from the cart' });
    } else {
      res.status(404).json({ error: 'Product not found in the cart.' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to remove the product from the cart.' });
  }
});

router.put('/update-cart/:productId', (req, res) => {
    try {
      const { productId } = req.params;
      const { quantity } = req.body;
  
      const cartItem = shoppingCart.find(item => item.product.id === productId);
  
      if (!cartItem) {
        return res.status(404).json({ error: 'Product not found in the cart.' });
      }
  
      cartItem.quantity = quantity;
  
      res.status(200).json({ message: 'Product quantity updated in the cart' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to update the product quantity in the cart.' });
    }
  });
  

module.exports = router;
