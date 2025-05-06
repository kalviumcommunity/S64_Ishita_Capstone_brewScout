// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  profilePic: {
    type: String,
    default: '' // or a placeholder URL
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community' // if you're implementing user communities
  }
});

module.exports = mongoose.model('User', userSchema);
