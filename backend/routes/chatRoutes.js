//Contains the routes, takes the functionality from the controller

const express = require('express');
const { addChat } = require('../controllers/chatController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, addChat);
module.exports = router;