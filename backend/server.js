const express = require('express');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./models/db');

// Enable CORS for specific origin (for example, your frontend URL)
const corsOptions = {
  origin: 'https://projectmanagment-ten.vercel.app', // allow requests from this origin
  methods: ['GET', 'POST'], // allowed HTTP methods
  allowedHeaders: ['Content-Type'], // allowed headers
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));

// Enable CORS
app.use(cors());
// Middleware to parse JSON bodies
app.use(bodyParser.json());

// ✅ Add a simple API route for testing
app.get('/api/test', (req, res) => {
  res.json({ message: "API is working!" });
});
// Use routes
app.use(userRoutes);
app.use(projectRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


module.exports = app;
