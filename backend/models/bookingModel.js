const mongoose=require('mongoose'); 

const bookingSchema = mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User' 
        },
        listingId:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Listing' 
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