const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cafeRouter = require('./routes/cafes');
const userRoutes = require('./routes/users');
const reviewRouter = require("./routes/reviews");


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
 app.use('/api/users', userRoutes);
 app.use("/api/reviews", reviewRouter);

 // Default route (optional)
app.get("/", (req, res) => {
  res.send("☕ brewScout API is running...");
});
 
 // Only one route setup, and correct path
  app.listen(PORT, () =>
    console.log(`🚀 Server running at server.js http://localhost:${PORT}`)
  );
