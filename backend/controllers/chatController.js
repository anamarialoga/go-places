const asyncHandler = require('express-async-handler');
const dotenv= require('dotenv');
const Chat = require('../models/chatModel')
const User = require('../models/userModel');

const addChat= asyncHandler(async (req, rsp) => {

    const users = await User.find()


    let toUser="";
    console.log(users)
    users.forEach((user)=>{
        console.log(user.id)
        if(user.id === req.body.to)
            toUser = user.firstName + " " + user.lastName;
    })

    const to_from = [req.body.to, req.user.id]
    const toUser_fromUser = [toUser, req.body.fromUser]
    const chat = await Chat.create({
     listingConv: req.params.listingid,
     to_from: to_from,
     toUser_fromUser: toUser_fromUser,
     message: req.body.message,
     to: req.body.to,
     from: req.user.id,
     toUser: toUser,
     fromUser: req.body.fromUser
    })
    return rsp.status(200).json(chat);
})


const getChatsByListing = asyncHandler(async (req, rsp) => {
    const chats = await Chat.find({$and: [{$or: [{to: req.user.id}, {from: req.user.id}]}, {listingConv: req.params.listingid}]})
    if(chats) {
        return rsp.status(200).json(chats);
    }else if(chats.length===0){
        console.log('Currently there are no chats')
        return rsp.status(200).json({message: 'Currently there are no chats'})
    }else{
        return rsp.status(400).json({message: 'Could not fetch chats'})
    }  
})


const getChatsWithUser = asyncHandler(async (req, rsp) => {
    const chats = await Chat.find({$and: [    {$or: [  { $and: [{to: req.user.id},{from: req.params.userid} ] }  ,   { $and: [{to: req.params.userid},{from: req.user.id} ] }  ]}, {  listingConv: req.params.listingid } ]})
   
    console.log(chats)

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

module.exports={addChat, getChatsByListing, getAllMyConvos, getChatsWithUser}