const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cafeRouter = require("./routes/cafes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB Connect
mongoose
  .connect(process.env.MONGO_URI)
  .then((data) => {
    console.log(`✅ MongoDB connected : ${data.connection.host}`);
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/api/cafes",cafeRouter)

 // Only one route setup, and correct path
  app.listen(PORT, () =>
    console.log(`🚀 Server running at server.js http://localhost:${PORT}`)
  );
