const mongoose=require('mongoose'); 

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please type a name']
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
        unique: true
    },
    isStaff:{
        type: Boolean,
        required:[true],
        default: false
    }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema);