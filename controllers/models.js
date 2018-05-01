const express = require('express')
const { Models } = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  Models.find()
    .then(models => {
      res.json(models)
    })
    .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
  const newModels = new Models(req.body.user)
  newUser.save()
    .then((models) => {
      res.json(models)
    })
    .catch(console.log)
})

router.get('/:id', (req, res) => {
  Models.findById(req.params.id)
    .then((models) => {
      user.ideas = models.ideas.reverse()
      res.json(models)
    })
    .catch(console.log)
})

module.exports = router