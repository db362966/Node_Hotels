const express = require("express");
const router = express.Router();

const MenuItem = require('./../models/MenuItem');


// menu items 

//post method to insert item in the menu
router.post('/', async (req, res)=>{
try{
  const data = req.body 
  const newMenu = new MenuItem(data);
  const response = await newMenu.save();
  console.log('data saved')
  res.status(200).json(response);
}
catch(err){
  console.log(err);
  res.status(500).json({error: 'internl server error'});
}
})
//get method to read the menuitems
router.get('/', async (req, res) =>{ 
  try{
       const data =  await MenuItem.find();
       console.log('data fetched successfuly')
       res.status(200).json(data);
  }catch(err){
       console.log(err);
       res.status(500).json({error: 'internl server error'});
  }
})

router.get('/:taste', async (req, res)=>{
  try{
      const taste = req.params.taste; // extract the work type from the url parameter
      if(taste == 'spicy' || taste == 'sweet' || taste == 'sour'){
      
         const response = await MenuItem.find({taste: taste});
         console.log('response fetched');
         res.status(200).json(response);

      }else{
        res.status(404).json({error: 'not available '});
      }
  }catch(err){
       console.log(err);
       res.status(500).json({error: 'internl server error'});
  }
})

module.exports = router;