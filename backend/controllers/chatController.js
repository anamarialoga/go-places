const asyncHandler = require('express-async-handler');
const dotenv= require('dotenv');
const Chat = require('../models/chatModel')


const addChat= asyncHandler(async (req, rsp) => {

    const chat = await Chat.create({
     listingConv: req.params.listingid,
     from: req.user.id,
     to: req.body.to,
     message: req.body.message
    })
    return rsp.status(200).json(chat);
})


const getAllChats = asyncHandler(async (req, rsp) => {
    const chats = await Chat.find({$or: [{to: req.user.id},{from: req.user.id}]});
    if(chats) {
        return rsp.status(200).json(chats);
    }else if(chats.length===0){
        console.log('Currently there are no chats')
        return rsp.status(200).json({message: 'Currently there are no chats'})
    }else{
        return rsp.status(400).json({message: 'Could not fetch chats'})
    }  
})

const getAllMyConvos = asyncHandler(async (req, rsp) => {
    //$or: [ { Expression1 }, { Expression2 }, ..., { ExpressionN } ]
    const chats = await Chat.find({$or: [{to: req.user.id},{from: req.user.id}]});
    if(chats) {
        return rsp.status(200).json(chats);
    }else if(chats.length===0){
        console.log('Currently there are no chats')
        return rsp.status(200).json({message: 'Currently there are no chats'})
    }else{
        return rsp.status(400).json({message: 'Could not fetch chats'})
    }  
})


dotenv.config();

module.exports={addChat, getAllChats, getAllMyConvos}