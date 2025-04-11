const mongoose = require('mongoose');

const cafeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

const Cafe = mongoose.model('cafes', cafeSchema);
module.exports = Cafe;