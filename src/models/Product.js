const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required.'],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'Product price is required.'],
  },
  stock: {
    type: Number,
    required: [true, 'Product stock is required.'],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  // Add other product-related fields here
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
