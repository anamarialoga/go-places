//Contains the routes, takes the functionality from the controller

const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {addBooking} = require('../controllers/bookingController');
const router = express.Router();

router.post('/', protect, addBooking);
module.exports = router;