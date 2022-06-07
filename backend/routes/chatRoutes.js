//Contains the routes, takes the functionality from the controller

const express = require('express');
const { addChat, getAllChats, getAllMyConvos } = require('../controllers/chatController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, getAllMyConvos);
router.get('/:listingid',protect, getAllChats)
router.post('/:listingid', protect, addChat);
module.exports = router;