//Contains the routes, takes the functionality from the controller

const express = require('express');
const { addChat, getChatsByListing, getAllMyConvos , getChatsWithUser} = require('../controllers/chatController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, getAllMyConvos);
router.get('/:listingid',protect, getChatsByListing)
router.get('/:listingid/:userid',protect, getChatsWithUser )
router.post('/:listingid', protect, addChat);
module.exports = router;