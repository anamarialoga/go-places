const mongoose=require('mongoose'); 
const { stringify } = require('nodemon/lib/utils');

const bookingSchema = mongoose.Schema({
        userId: {
            type: String,
            required: true,
        },
        listingId:{
            type: String,
            required: true,
        },
        dateRange:{
            type:[],
            required: true
        },
        billingData: {
            type: {},
            required:true,
        },
        paymentData:{
            type: {},
            required:true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Booking', bookingSchema);