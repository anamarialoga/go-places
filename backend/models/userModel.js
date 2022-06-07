const mongoose=require('mongoose'); 

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: [true, 'Please type a first name']
    },
    lastName:{
        type: String,
        required: [true, 'Please type a last name']
    },
    email:{
        type: String,
        required: [true, 'Please type an email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please type a password'],
    },
    phone:{
        type: String,
    },
    address:{
        type:String,
    },
    city:{
        type:String,
    },
    country:{
        type: String
    },
    since: {
        type: Date,
    },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema);