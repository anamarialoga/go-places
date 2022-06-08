//Contains the routes, takes the functionality from the controller

const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {addBooking, getUserBookings, getThePropertiesIRented, cancelBooking} = require('../controllers/bookingController');
const router = express.Router();

router.post('/', protect, addBooking);
router.get('/me', protect, getUserBookings)
router.get('/me/rented', protect, getThePropertiesIRented)
router.delete('/me/:bookingid', protect, cancelBooking)
module.exports = router;