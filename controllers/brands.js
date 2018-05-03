const express = require('express')
const { Brands } = require('../db/schema')
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


module.exports= router