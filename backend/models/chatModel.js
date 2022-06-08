const mongoose=require('mongoose'); 

const chatSchema = mongoose.Schema(
    {
        listingConv: {
            type:String,
            required: true
        },
        to:{
            type:String,
            required: true,
        },
        toUser:{
            type:String
        },
        from: {   
            type: String,
            required: true, 
        }, 
        fromUser:{
            type:String
        },
        message: {
            type:String,
            required: true
        },
        to_from:{
            type:[]
        },
        toUser_fromUser:{
            type:[]
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Chat', chatSchema);