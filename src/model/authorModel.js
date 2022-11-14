const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    fname: {
        type: String, 
        required: true
    }, 
    lname: {
        type: String, 
        required: true
    }, 
    title: {
        type: String, 
        enum:["Mr", "Mrs", "Miss"],
        required: true
    },
    email: {
        type : String , 
        required : true,
        unique:true,
        match : [/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})$/]
        // match : [/^()@ashish().()()?$/]
        
    },
    password: {
        type:String,
        required:true
    }
    


}, { timestamps: true });


module.exports = mongoose.model('Author', authorSchema)