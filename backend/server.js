const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cafesRoute = require('./routes/cafes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/cafes', cafesRoute);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((error) => console.error('❌ DB connection error:', error));
