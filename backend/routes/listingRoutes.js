const express = require('express');
const {createListing,getAllListings, getListings, getSingleListing, updateListing, delListing, getListing} = require('../controllers/listingController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();
const multer = require('multer');
const { storage, fileFilter } = require('../middleware/uploadMiddleware');
const upload = multer({ storage, fileFilter });


router.get('/', getAllListings);
router.post('/', protect, upload.array("images"), createListing);
router.get('/me', protect,  getListings);
router.get('/me/:listingid',protect, getSingleListing);
router.get('/:listingid',protect, getListing);
router.put('/:listingid', protect, upload.array("images"), updateListing);
router.delete('/:listingid', protect, delListing);

module.exports= router;