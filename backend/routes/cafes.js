// routes/cafes.js

const express = require("express");
const router = express.Router();
const Cafe = require("../models/Cafe");

// POST - Create a new cafe
router.post("/", async (req, res) => {
  try {
    const { name, location, ambiance, tags } = req.body;
    const newCafe = new Cafe({
      name,
      location,
      ambiance,
      tags
    });

    await newCafe.save();
    res.status(201).json({ message: "Cafe added successfully", cafe: newCafe });
  } catch (error) {
    console.error("Error adding cafe:", error);
    res.status(500).json({ error: "Failed to add cafe" });
  }
});

// GET - Retrieve all cafes
router.get("/", async (req, res) => {
  try {
    const cafes = await Cafe.find();
    res.status(200).json(cafes);
  } catch (error) {
    console.error("Error fetching cafes:", error);
    res.status(500).json({ error: "Failed to fetch cafes" });
  }
});

module.exports = router;
