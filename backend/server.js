const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
// Enable CORS for all routes, so your React frontend can talk to this backend.
app.use(cors()); 
// Allow the server to understand JSON in request bodies.
app.use(express.json());

// A simple test route to check if the server is running
app.get('/api/test', (req, res) => {
  res.json({ message: "Hello from the AgriTrust backend!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});