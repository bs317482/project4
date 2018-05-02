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

module.exports= router