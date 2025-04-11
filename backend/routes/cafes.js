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

// POST - Add a cafe
cafeRouter.post("/add", async (req, res) => {
    const { name, location, tags } = req.body;
  
    // Basic validation
    if (!name || !location) {
      return res.status(400).json({
        success: false,
        message: "Name and location are required fields",
        error: "ValidationError",
      });
    }
  
    try {
      const newCafe = new Cafe({ name, location, tags });
      await newCafe.save();
  
      res.status(201).json({
        success: true,
        message: "Cafe added successfully",
        data: newCafe,
      });
    } catch (error) {
      console.error("Error adding cafe:", error);
      res.status(500).json({
        success: false,
        message: "Failed to add cafe",
        error: error.message,
      });
    }
  });
  
  
  // PUT - Update cafe by ID
cafeRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
  
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid cafe ID format",
        error: "InvalidObjectId",
      });
    }
  
    try {
      const updatedCafe = await Cafe.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedCafe) {
        return res.status(404).json({
          success: false,
          message: "Cafe not found",
          error: "NotFound",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Cafe updated successfully",
        data: updatedCafe,
      });
    } catch (error) {
      console.error("Error updating cafe:", error);
      res.status(500).json({
        success: false,
        message: "Failed to update cafe",
        error: error.message,
      });
    }
  });
  
module.exports = cafeRouter;