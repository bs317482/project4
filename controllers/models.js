const express = require('express')
const { Brands } = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  Models.find()
    .then(models => {
      res.json(models)
    })
    .catch((err) => console.log(err))
})
// router.post('/', async (req, res) => {
//     try {
//       const newModels = req.body
//       const savedModels = await Models.create(newModels)
//       res.json(savedModels)
//     } catch (err) {
//       console.log(err)
//       res.status(500).json(err)
//     }
//   })
module.exports= router