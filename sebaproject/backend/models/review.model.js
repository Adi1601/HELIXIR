
const mongoose = require("mongoose")

const schema = mongoose.Schema


const review = new schema({
    rating:{
        type:Number,
        required: true,
        unique: false,
        trim: true,
    },
    comment:{
        type:String,
        required:false,
        trim: true,
    },
    id_doc:{
        type: String,
        required: true,
        unique: true,
    },
});

const Review = mongoose.model('Review', review);

module.exports=Review;