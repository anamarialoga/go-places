const mongoose=require('mongoose'); 

const listingSchema= mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please type a name'],
        unique: true
    },
    type:{
        type: String,
        required: [true, 'Please specify a type']
    },
    purpose:{
        type: String,
        required: [true, 'Please specify the purpose']
    },
    bedrooms:{
        type: Number,
        default: 1
    },
    bathrooms:{
        type: Number,
        default: 1
    },
    spa:{
        type: Boolean,
        default: false
    },
    parking:{
        type: Boolean,
        default: false
    },
    pool:{
        type: Boolean,
        default: false
    },
    location:{
        type: String,
        required: [true, 'Please type an address']
    },
    geoloc:{
        type: Boolean,
        default: true,
    },
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number,
    },
    offer:{
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        default:10
    },
    discount: {
        type: Number,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, //Relationship between user and tickets
        required: true,
        ref: 'User' 
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    images: {
        type: [],
        required: true
    },
    description:{
        type: String,
    },
    kitchen: {
        type: Boolean,
        default: false,
    },
    people: {
        type: Number, 
        default: 1
    },
    ranges: {
        type: [],
    }
}, 
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Listing', listingSchema);