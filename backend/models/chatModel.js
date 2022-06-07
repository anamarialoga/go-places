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
        from: {   
            type: String,
            required: true, 
        }, 
        message: {
            type:String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Chat', chatSchema);