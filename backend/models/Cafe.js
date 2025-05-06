const mongoose = require('mongoose');

const cafeSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true // Automatically trims leading/trailing spaces
  },
  location: { 
    type: String, 
    required: true, // Make location required if needed
    trim: true 
  },
  tags: {
    type: [String],
    default: [], // Default to an empty array if no tags are provided
  },
  createdAt: { 
    type: Date, 
    default: Date.now // Automatically set the date when the cafe is created
  }
});

// Create and export the 'Cafe' model
const Cafe = mongoose.model('Cafe', cafeSchema);
module.exports = Cafe;
