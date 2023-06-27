const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
    fullname:{
        type: String,
        require: true
    },
    email:{
        type: String,
        //unique: true,
        require: true,
    },
    phone:{
        type: String,
        //unique: true,
        require: true,
    },
    avatar:{
        type: String,
        
    },
    password:{
        type: String,
        require: true
    },
    emailVarified:{
        type: Boolean,
        default: false
    },
    marchent:{
        type: Boolean,
        default: false
    },
    randomOtp:{
        type: String,
    },
    role:{
        type: String,
        default: "member",
        enum:["admin", "member", "marchent"]
    },
    updated:{
        type: Date,
    },
    created:{
        type: Date,
        default: Date.now,
       
    },
    facebookId:{
        type: String,
       
    },
    linkdinId:{
        type: String,
       
    },
    
})

module.exports = mongoose.model("User", userSchema)