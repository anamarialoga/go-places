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

    const listing = await Listing.findById(req.body.listingid)
    let finalPrice;

    if(listing.offer === true)
    {
        finalPrice = listing.discount * (req.body.dateRange.length -1)
    }else
    {
        finalPrice = listing.price * (req.body.dateRange.length -1)
    }

    console.log(finalPrice)

    const booking = await Booking.create({
    billingData: req.body.billingData,
    paymentData: req.body.paymentData,
    dateRange: req.body.dateRange,
    listingId: req.body.listingid,
    userId: req.user.id,
    status: "Confirmed",
    landlord: listing.userId,
    price : finalPrice
})
    return rsp.status(200).json(booking);
})


const getThePropertiesIRented =  asyncHandler(async (req, rsp) => {

    const bookings = await Booking.find({landlord: req.user.id})
    if(bookings)
    {
        if(bookings.length>0) return rsp.status(200).json(bookings);
        else return rsp.status(200).json({message: 'The properties of this user are not booked yet'})
    }else return rsp.status(500).json({message: "Could not fetch my booked properties"})

})


const getUserBookings = asyncHandler(async (req, rsp) => {

    const bookings = await Booking.find({userId: req.user.id})
    console.log(bookings);
    if(bookings){
    if(bookings.length>0)
        return rsp.status(200).json(bookings);
    else 
        return rsp.status(200).json({message: 'This user did not make any bookings'});
    }else return rsp.status(500).json({message:'Could not fetch bookings'})
})


const cancelBooking = asyncHandler(async (req, rsp) => {

    //acccess the id of the booking from URL params;
    const booking = await Booking.findById(req.params.bookingid);
    if(!booking) {
        return rsp.status(404).json({message: 'Booking not found'});
    }
    await booking.remove();

    const listing = await Listing.findById(booking.listingId);

    let newDates = [];
    listing.ranges.map((date)=> {
        if(!booking.dateRange.includes(date))
          {  
            newDates.push(date)
          }
        return newDates;
    })

    console.log("new date ranges", newDates)
    listing.ranges=newDates;
    listing.save();
    return rsp.status(200).json({message: 'The booking has been deleted'});
})


dotenv.config();

module.exports={addBooking, getUserBookings, getThePropertiesIRented, cancelBooking}