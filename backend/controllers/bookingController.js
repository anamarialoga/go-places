const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Listing  = require('../models/listingModel');
const Booking = require('../models/bookingModel')
const dotenv= require('dotenv');



// @desc Create a booking
// @route /api/tickets/bookings
// @access Protected
// POST
const addBooking = asyncHandler(async (req, rsp) => {
    const user = await User.findById(req.user.id);

    const booking = await Booking.create({
    billingData: req.body.billingData,
    paymentData: req.body.paymentData,
    dateRange: req.body.dateRange,
    listingId: req.body.listingid,
    userId: user.id,
})
    return rsp.status(200).json(booking);
})

dotenv.config();

module.exports={addBooking}