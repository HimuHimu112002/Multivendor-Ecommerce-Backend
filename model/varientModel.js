const mongoose = require("mongoose")
const {Schema} = mongoose

const VariantSchema = new Schema({
    variantname:{
        type: String,
        require: true
    },
    image:{
        type:String,
        require:true
    },
    option:[
        {
            type: Schema.Types.ObjectId,
            ref:"Option"
        }
    ],
    store:{
        type: Schema.Types.ObjectId,
        ref: "Store"
    },
    product:{
        type: Schema.Types.ObjectId,
        ref:"Product"
    },
    updated:{
        type: Date,
    },
    created:{
        type: Date,
        default: Date.now,
       
    },

})


module.exports = mongoose.model("Variant", VariantSchema)