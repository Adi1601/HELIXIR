const mongodb = require("mongodb")

const schema = mongodb.schema


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

const User = mongodb.model('User', userSchema);

model.exports=User;