const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

 // Only one route setup, and correct path
  app.listen(PORT, () =>
    console.log(`🚀 Server running at server.js http://localhost:${PORT}`)
  );
