const mongoose=require('mongoose'); 

const chatSchema = mongoose.Schema(
    {
        to:{
            type:String,
            required: true,
        },
        from: {   
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User' 
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