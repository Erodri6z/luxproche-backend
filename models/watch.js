import  mongoose from "mongoose";

const mongoose = require('mongoose')

const watchSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
    brand: {
      type:String,
      required:true
    },
    image:{
      type:String,
      required:true
    },
    price:{
      type:String,
      required:true
    },
    altName:{
      type:String,
      required:true
    },
    altImage:{
      type:String,
      required:true
    },
    altPrice:{
      type:String,
      required:true
    },
    altLink:{
      type:String,
      required:true
    }

  }
)

watchSchema.index({ name: "text", brand: "text" })

module.exports = mongoose.model("Watch", watchSchema)