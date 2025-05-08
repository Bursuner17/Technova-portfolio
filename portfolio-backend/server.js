 // backend/server.js
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // To parse JSON requests

// Contact form route
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Portfolio backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

