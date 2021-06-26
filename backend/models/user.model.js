const mongoose = require("mongoose")

const schema = mongoose.Schema


const user = new schema({
    username:{
        type:String,
        required: true,
        unique:true,
        trim: true,
        minlength:3,
    },
    password:{
        type: String,
        required: true,
        unique: true,
        minlength: 8,
    },
});

const User = mongoose.model('User', user);

module.exports=User;