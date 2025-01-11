const express = require('express');
const router = express.Router();

// Define a simple GET route
router.get('/', (req, res) => {
  res.json({ message: 'Hello from Express.js on AWS Lambda!' });
});

// Define a GET route with a dynamic parameter
router.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}!` });
});

// Define a POST route for receiving data
router.post('/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Received data successfully!', data });
});

module.exports = router;
