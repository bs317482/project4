const express = require('express')
const { Brands, Models } = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  Brands.find()
    .then(brands => {
      res.json(brands)
    })
    .catch((err) => console.log(err))
})

router.get('/:brandId', (req, res) => {
    Brands.findById(req.params.brandId)
      .then((brand) => {
        res.json(brand)
      })
      .catch((err) => console.log(err))
  })
  
  router.post('/', async (req, res) => {
    try {
      const newBrands = req.body
      const savedBrands = await Brands.create(newBrands)
      res.json(savedBrands)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })
  router.delete('/:id', async (req, res) => {
    try {
      const brandId = req.params.id
      console.log("brand id: ", brandId)
      await Brands.findByIdAndRemove(brandId)
      
      res.json({
        msg: 'Successfully Deleted'
        
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })

  // update route
  router.put('/:id', async (req, res) => {
    try {
      const brandId = req.params.id
      const updatedBrand = req.body
      const savedBrands = await Brand.findByIdAndUpdate(brandId, updatedBrand)
      res.json(savedBrands)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })
  


module.exports= router