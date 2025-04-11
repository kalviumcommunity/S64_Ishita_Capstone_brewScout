const express = require("express");
const mongoose = require("mongoose");
const cafeRouter = express.Router();
const Cafe = require("../models/Cafe");

// Test Route
cafeRouter.get("/test", (req, res) => {
  res.send("Cafe routes are working!");
});

// GET all cafes
cafeRouter.get("/", async (req, res) => {
  try {
    const cafes = await Cafe.find();
    res.status(200).json(cafes);
  } catch (error) {
    console.error("Error fetching cafes:", error);
    res.status(500).json({ error: "Failed to fetch cafes" });
  }
});

// GET cafe by ID with validation
cafeRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  // Validate ID format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid cafe ID format" });
  }

  try {
    const cafe = await Cafe.findById(id);
    if (!cafe) {
      return res.status(404).json({ message: "Cafe not found" });
    }
    res.status(200).json(cafe);
  } catch (error) {
    console.error("Error fetching cafe by ID:", error);
    res.status(500).json({ error: "Failed to fetch cafe" });
  }
});

module.exports = cafeRouter;


// POST - Add a cafe
cafeRouter.post("/add", async (req, res) => {
    try {
      const { name, location, tags } = req.body;
      const newCafe = new Cafe({ name, location, tags });
      await newCafe.save();
      res.status(201).json({ message: "Cafe added successfully", cafe: newCafe });
    } catch (error) {
      console.error("Error adding cafe:", error);
      res.status(500).json({ error: "Failed to add cafe" });
    }
  });

module.exports = cafeRouter;