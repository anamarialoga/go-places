const asyncHandler = require('express-async-handler');
const dotenv= require('dotenv');
const Chat = require('../models/chatModel')


const addChat= asyncHandler(async (req, rsp) => {

    const chat = await Chat.create({
     from: req.user.id,
     to: req.body.to,
     message: req.body.message
    })
    return rsp.status(200).json(chat);
})


dotenv.config();

module.exports={addChat}