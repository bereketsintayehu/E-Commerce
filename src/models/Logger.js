const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  message: {
    type: String,
    required: [true, 'Log message is required.'],
  },
  action: {
    type: String,
    required: [true, 'Log action is required.'],
  },
});

const Logger = mongoose.model('Logger', logSchema);

module.exports = Logger;
