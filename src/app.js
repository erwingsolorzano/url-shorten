const express = require('express');
const cors = require('cors');
const urlRoutes = require('./routes/urlRoutes');

const app = express();

// Enable CORS for requests from the frontend (3001)
app.use(cors({ origin: 'http://localhost:3001' }));

// Middleware
app.use(express.json());

// API Routes
app.use('/api/urls', urlRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
