const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bugRoutes = require('./routes/bugs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/bugs', bugRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error Middleware:', err);
  res.status(err.status || 500).json({ message: err.message || 'Server Error' });
});

// Start server if not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app; // Export app for testing
