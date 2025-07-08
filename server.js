const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Auth routes
console.log("📦 Loading /api/auth routes...");
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
console.log("✅ /api/auth routes mounted!");

// Root route (health check)
app.get('/', (req, res) => {
  res.send('✅ Authify backend is up and running!');
});

// Fallback 404 handler (for unknown routes)
app.use((req, res, next) => {
  console.warn(`⚠️  Unknown route accessed: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ message: '❌ Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
