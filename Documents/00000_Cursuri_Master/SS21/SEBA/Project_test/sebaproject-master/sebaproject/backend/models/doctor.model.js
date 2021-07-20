const mongoose = require("mongoose")

const schema = mongoose.Schema


const doctor = new schema({
    name:{
        type:String,
        required: true,
        //unique:true,
        trim: true,
        minlength:3,
    },
    city:{
        type:String,
        required:true,
        trim: true,
        //unique: true,
    },
    speciality:{
        type: String,
        required: true,
        //unique: true,
        //minlength: 8,
    },
    hospital:{
        type: String,
        required: false,
    },
});

const Doctor = mongoose.model('Doctor', doctor);

module.exports=Doctor;