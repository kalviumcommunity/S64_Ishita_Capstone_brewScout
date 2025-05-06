const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// @route   POST /api/reviews
// @desc    Create a new review
router.post("/", async (req, res) => {
  try {
    const { user, cafe, rating, comment } = req.body;

    const newReview = new Review({
      user,
      cafe,
      rating,
      comment,
    });

    const savedReview = await newReview.save();
    res.status(201).json(savedReview);  // Return the saved review with status 201
  } catch (err) {
    res.status(400).json({ error: err.message });  // Handle validation or other errors
  }
});

// @route   GET /api/reviews
// @desc    Get all reviews
router.get("/", async (req, res) => {
  try {
    // Populate both user and cafe with full details (instead of just name)
    const reviews = await Review.find()
      .populate("user", "name email")  // Adjust according to the fields in your User model
      .populate("cafe", "name location tags createdAt");  // Adjust according to the fields in your Cafe model

    res.status(200).json(reviews);  // Return the populated reviews
  } catch (err) {
    res.status(500).json({ error: err.message });  // Handle internal server errors
  }
});

// @route   GET /api/reviews/:id
// @desc    Get a single review by ID
router.get("/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate("user", "name email")  // Adjust according to the fields in your User model
      .populate("cafe", "name location tags createdAt");  // Adjust according to the fields in your Cafe model

    if (!review) {
      return res.status(404).json({ message: "Review not found" });  // Review not found
    }

    res.json(review);  // Return the populated review
  } catch (err) {
    res.status(500).json({ error: err.message });  // Handle internal server errors
  }
});

module.exports = router;
