require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const { Models, Brands, Features } = require('./schema')

const vroom = new Features({
  title: 'SPECS',
  description: ["Engine:6.5L 48-Valve V-12",
   "HP:740hp", 
   "Torque:509lb-ft", 
   "Base Price: $493,075"
 ]
})
const zoom = new Models({
    name: 'Aventador SV-',
    year: "-2018"
})
const lamb = new Brands({
  name: 'Lamborghini 🇮🇹 ',
  picture: 'spaceiscool'
})

const fast = new Features({
    title: 'SPECS',
    description: ["Engine:5.0L 32-Valve V-8",
     "HP:1160hp", 
     "Torque:944lb-ft", 
     "Base Price: $1,700,000"
   ]
  })
  const turbo = new Models({
      name: 'Agera RS-',
      year: "-2018"
  })
  const koen = new Brands({
    name: 'Koenigsegg 🇸🇪 ',
    picture: 'spaceiscool'
  })

  const euro = new Features({
    title: 'SPECS',
    description: ["Engine:3.8L 32-Valve V-8electirc",
     "HP:903hp", 
     "Torque:727lb-ft", 
     "Base Price: $1,500,000"
   ]
  })
  const london = new Models({
      name: 'P1-',
      year: "-2018"
  })
  const mclaren = new Brands({
    name: 'McLaren 🇬🇧 ',
    picture: 'spaceiscool'
  })

zoom.features.push(vroom)
lamb.models.push(zoom)
turbo.features.push(fast)
koen.models.push(turbo)
london.features.push(euro)
mclaren.models.push(london)

Brands.remove({})
  .then(() => lamb.save())
  .then(() => koen.save())
  .then(() => mclaren.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())