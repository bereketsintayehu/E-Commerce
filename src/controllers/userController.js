const User = require('../models/User');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/users', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create a user.' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users.' });
  }
});

router.put('/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10); // Hash the new password
      await User.findByIdAndUpdate(id, { username, email, password: hashedPassword });
      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to update the user.' });
    }
  });
  
  router.delete('/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await User.findByIdAndRemove(id);
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to delete the user.' });
    }
  });
  

module.exports = router;
