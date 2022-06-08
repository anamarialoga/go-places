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
        landlord: {
            type: {},
            required:true
        },
        status:{
            type: String
        },
        price:{
            type:Number
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Booking', bookingSchema);