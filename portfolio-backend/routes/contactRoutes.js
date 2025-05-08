// backend/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/contactController');

router.post('/', sendMessage); // POST /api/contact

module.exports = router;
