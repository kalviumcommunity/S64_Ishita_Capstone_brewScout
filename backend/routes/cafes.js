const express = require("express");
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

// GET cafe by ID
cafeRouter.get("/:id", async (req, res) => {
  try {
    const cafe = await Cafe.findById(req.params.id);
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