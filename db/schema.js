const mongoose = require('mongoose');

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema

const FeaturesSchema = new Schema({
    title: {
        type: String,
        required: false
      },
    description: {
        type: String,
        required: false
      },
    
  })

const ModelsSchema = new Schema({
    name: {
        type: String,
        required: false
      },
    year: {
        type: String,
        required: false
    },
    features: [FeaturesSchema]
})

const BrandsSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  picture: {
    type: String,
    required: false
  },
  models: [ModelsSchema]
})

const Models = mongoose.model('Models', ModelsSchema)
const Brands = mongoose.model('Brands', BrandsSchema)
const Features = mongoose.model('Features', FeaturesSchema)


module.exports = {
    Brands, Models, Features
}