const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const Listing = require('../models/listingModel');
const dotenv= require('dotenv');
const { resetWatchers } = require('nodemon/lib/monitor/watch');

dotenv.config();



// @desc Retrieve user's listings
// @route /api/listings/me
// @access Protected
// GET
const getListings = asyncHandler(async (req, rsp) => {

    const user = await User.findById(req.user._id);
    if(!user){
        console.log('User not found');
        return rsp.status(404).send({message: 'User not found'});
    }

    const listings = await Listing.find({userId: req.user.id})
    if(listings.length>0) {
        rsp.status(200).json(listings);
    }else if(listings.length === 0){
        return rsp.status(200).json([])
    }else{
        return rsp.status(400).json({message: 'Could not fetch listings'})
    }   
})


// @desc Retrieve user's single listing
// @route /api/listings/me/:listingid
// @access Protected
// GET
const getSingleListing = asyncHandler(async (req, rsp) => {

    const user = await User.findById(req.user.id);
    if(!user){
        console.log('User not found');
        return rsp.status(404).send({message: 'User not found'});
    }

    //acccess the id of the listing from URL params;
    const listing = await Listing.findById(req.params.listingid);
    if(!listing) {
        return rsp.status(404).json({message: 'Listing not found'});
    }

    //if the userId from the listing obj doesn't match the id of the user that made the request
    if(listing.userId.toString() !== req.user.id)
    {
        console.log('Not Authorized')
        return rsp.status(401).json({message: 'Not Authorized'})
    } 

    return rsp.status(200).json(listing);
})

// @desc Retrieve single listing
// @route /api/listings/:listingid
// @access Protected
// GET
const getListing = asyncHandler(async (req, rsp) => {

    const user = await User.findById(req.user.id);
    if(!user){
        console.log('User not found');
        return rsp.status(404).send({message: 'User not found'});
    }

    //acccess the id of the listing from URL params;
    const listing = await Listing.findById(req.params.listingid);
    if(!listing) {
        return rsp.status(404).json({message: 'Listing not found'});
    }

    return rsp.status(200).json(listing);
})





// @desc Retrieve all listings
// @route /api/listings
// @access Public
// GET
const getAllListings = asyncHandler(async (req, rsp) => {
    const listings = await Listing.find();
    if(listings) {
        rsp.status(200).json(listings);
    }else if(listings.length===0){
        console.log('Currently there are no listings')
        return rsp.status(200).json({message: 'Currently there are no listings'})
    }else{
        return rsp.status(400).json({message: 'Could not fetch listings'})
    }  
})


// @desc Add new listing
// @route /api/listings
// @access Protected
// POST
const createListing = async(req, res) => {
    const {
        name, 
        type, 
        purpose, 
        bedrooms, 
        bathrooms, 
        spa, 
        parking, 
        pool, 
        location, 
        geoloc, 
        latitude,
        longitude,
        offer, 
        price,
        discount,
        description,
        kitchen, 
        people
        }= req.body;

    let images = [];
    //Create the images array in backend with the files received through the request
    req.files.forEach((file) => {
        images.push(file.filename);
    });

    const user = await User.findById(req.user.id);
    if(!user){
        console.log('User not Connected');
        return res.status(404).send({message: 'User not Connected'});
    }
    const newListingData = {
        name, 
        type, 
        purpose, 
        bedrooms, 
        bathrooms, 
        spa, 
        parking, 
        pool, 
        location, 
        geoloc, 
        latitude,
        longitude,
        offer, 
        price,
        discount,
        images,
        description,
        kitchen,
        people,
        userId: req.user.id, 
        isActive: true,
        ranges: [],
    }

    const newListing = new Listing(newListingData);

    newListing.save()
           .then(() => res.json(newListing))
           .catch(err => res.status(400).json('Error: ' + err));

}


// @desc Update user's listing
// @route /api/listings/:listingid
// @access Protected
// PUT
const updateListing = async(req, res)=>{
    const user = await User.findById(req.user.id);
    if(!user){
        console.log('User not Connected');
        return res.status(404).send({message: 'User not Connected'});
    }

    const listing = await Listing.findById(req.params.listingid);
    if(!listing)
    {
        console.log('Listing not found');
        return res.status(404).send({message: 'Listing not found'});
    }


    const booking = await Booking.find({listingId: req.params.listingid});
    let OK=false;

    if(booking){
    if(booking[0].userId === req.user.id)
        OK=true;
    }

    const userName= user.firstName + " " + user.lastName;
    

    let averages= [...listing.average]
    if(req.body.review || req.body.rating )
    {
        const average = {
            timestamp: new Date(),
            user: userName,
            review: req.body.review,
            rating: req.body.rating
        }
        averages.push(average);
    }

    let images = [...listing.images]
    if(req.files){
        req.files.forEach((file)=>{
            images.push(file.filename);
        })
    }

    let ranges = [...listing.ranges]
    if(req.body.ranges){
        req.body.ranges.forEach((date)=>{
            ranges.push(date)
        })
    }


    listing.name = req.body?.name ?? listing.name
    listing.type= req.body?.type ?? listing.type
    listing.purpose = req.body?.purpose ?? listing.purpose
    listing.bedrooms = req.body?.bedrooms ?? listing.bedrooms
    listing.bathrooms = req.body?.bathrooms ?? listing.bathrooms
    listing.spa = req.body?.spa ?? listing.spa
    listing.parking = req.body?.parking ?? listing.parking
    listing.pool = req.body?.pool ?? listing.pool
    listing.location = req.body?.location  ?? listing.location
    listing.geoloc = req.body?.geoloc ?? listing.geoloc
    listing.latitude = req.body?.latitude ?? listing.latitude
    listing.longitude =  req.body?.longitude ?? listing.longitude
    listing.offer = req.body?.offer ?? listing.offer
    listing.discount = req.body?.discount ?? listing.discount
    listing.price = req.body?.price ?? listing.price
    listing.description = req.body?.description ?? listing.description
    listing.kitchen = req.body?.kitchen ?? listing.kitchen
    listing.people = req.body?.people?? listing.people
    listing.ranges = ranges;
    listing.images = images;
    if(OK===true){
        listing.average= averages;
    }else{
        return res.status(200).send({message:"You did not book this listing, so you cannot leave reviews"})
    } 
    
   listing.save().then(()=>res.json(listing));
}




// @desc Delete user listing
// @route /api/listings/:listingid
// @access Protected
// DELETE
const delListing = asyncHandler(async (req, rsp) => {

    const user = await User.findById(req.user.id);
    if(!user){
        console.log('User not found');
        return rsp.status(404).send({message: 'User not found'});
    }

    //acccess the id of the listing from URL params;
    const listing = await Listing.findById(req.params.listingid);
    if(!listing) {
        return rsp.status(404).json({message: 'Listing not found'});
    }

    if(listing.userId.toString() !== req.user.id)
    {
        console.log('Not Authorized')
        return rsp.status(401).json({message: 'Not Authorized'})
    } 

    await listing.remove();
    return rsp.status(200).json({message: 'The listing has been deleted'});
})






module.exports= {createListing, getAllListings, getListings, getSingleListing, updateListing, delListing, getListing};

