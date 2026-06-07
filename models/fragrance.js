const mongoose = require('mongoose')

const fragranceSchema = new mongoose.Schema(
  {
    name:{ 
      type: String, 
      required: true, 
      trim: true 
    },
    brand:{ 
      type: String, 
      required: true, 
      trim: true 
    },
    notes:{ 
      type: [String], 
      required: true 
    },
    image: {
      type: String,
      required: true
    },
    category:{ 
      type: String, 
      enum: ['men', 'women', 'unisex'], 
      default: 'unisex' 
    },
    price: {
      type: String,
      required: true
    },
    similarity: {
      type:String,
      required:true
    },
    dupeImage:{
      type: String,
      required: true
    },
    dupeName:{ 
      type: String, 
      trim: true },
    dupeLink:{ 
      type: String, 
      required: true, 
      trim: true },
  },
  { timestamps: true }
)


fragranceSchema.index({ name: 'text', brand: 'text' })

module.exports = mongoose.model('Fragrance', fragranceSchema)
