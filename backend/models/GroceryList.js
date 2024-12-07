const mongoose = require('mongoose');

const GroceryListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [{
    name: String,
    quantity: String,
    bought: {
      type: Boolean,
      default: false,
    },
  }],
});

module.exports = mongoose.model('GroceryList', GroceryListSchema);
