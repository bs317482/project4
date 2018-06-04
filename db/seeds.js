require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const { Models, Brands, Features } = require('./schema')

const vroom = new Features({
  title: 'Nutrition',
  description: ["",
   "350 calories", 
   "", 
   ""
 ]
})
const zoom = new Models({
    name: 'A grilled chicken sandwich is a good source of protein, carbohydrate, vitamins and minerals. It is also healthier than a fried chicken sandwich because grilling uses less oil than deep-frying, meaning fewer calories and fat in the final product.',
    year: ""
})
const lamb = new Brands({
  name: 'Grilled Chicken',
  picture: "http://2.bp.blogspot.com/-pGhJfzzRfOU/VfW0n2NTYCI/AAAAAAAABuA/tu1Ms3nvI_0/s1600/imagesP3RTKKE5.jpg"
})

const fast = new Features({
    title: 'Nutrition',
    description: ["",
     "500 calories", 
     "", 
     ""
   ]
  })
  const turbo = new Models({
      name: 'The sirloin steak is a steak cut from the back of the animal. In US butchery, the steak is cut from the rear back portion of the animal, continuing off the short loin from which T-bone, porterhouse, and club steaks are cut. The sirloin is actually divided into several types of steak.',
      year: ""
  })
  const koen = new Brands({
    name: 'Sirloin Steak',
    picture: "https://www.sghuffe.com/wp-content/uploads/2018/03/st_20180309_xmrsalt_3821133.jpg"
  })

  const euro = new Features({
    title: 'Nutrition',
    description: ["",
     "300-500 calories", 
     "", 
     ""
   ]
  })
  const london = new Models({
      name: 'Non-fried fish and shellfish such as shrimp, crab and lobster are low in saturated fat and are a healthy alternative to many cuts of meat. Fish high in omega-3 fatty acids such as mackerel, lake trout, herring, sardines, albacore tuna and salmon.',
      year: ""
  })
  const mclaren = new Brands({
    name: 'Fresh Fish',
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQShzLWyD-fW3_p3L6RJafznTtMGOk0xouT5IumzjZtD3vrL6"
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