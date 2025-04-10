const express = require('express');
const router = express.Router();
const Cafe = require('../models/Cafe');

// @route   POST /cafes
// @desc    Add a new cafe
router.post('/', async (req, res) => {
  try {
    const { name, location, tags } = req.body;

    const newCafe = new Cafe({ name, location, tags });
    const savedCafe = await newCafe.save();

    res.status(201).json(savedCafe);
  } catch (error) {
    console.error('POST error:', error.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;
