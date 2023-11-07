const mongoose = require("mongoose")

const prodcutSchema = mongoose.Schema({
    name:{
        type: String,
        require:[true,"Please Enter product Name"],
        trim: true
    },
    description:{
        type: String,
        require: [true, "Please Enter product Description"]
    },
    price:{
        type: Number,
        require: [true, "Please Enter product price"],
        maxLength:[8, "Price cann't exceed 8 characters"]
    },
    rating:{
        type: Number,
        default: 0
    },
    images:[
       {
        public_id:{
            type:String,
            require:true
        },
        url:{
            type:String,
            require: true
        }
       }
    ],
    category:{
        type: String,
        require: [true,"Please Enter Product Category"],
    },
    stock:{
        type:Number,
        require:[true, "Please Enter Product Stock"],
        maxLength:[4,"Stock cann't exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type: Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                require:true,
            },
            rating:{
                type:Number,
                require:true,
            },
            comment:{
                type:String,
                require: true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model("Product",prodcutSchema)