//Contains the routes, takes the functionality from the controller

const express = require('express');
const { registerUser, loginUser, getMe, updateUser, getUserById, getUsersById, getAllUsers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', registerUser);
router.get('/',protect, getUsersById)
router.get('/all', getAllUsers);
router.post('/login', loginUser);
router.get('/me', protect, getMe); //protected access
router.put('/:id', protect, updateUser) //protected
router.get('/:id', protect, getUserById) //protected
module.exports = router;