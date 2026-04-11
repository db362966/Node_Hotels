const express = require("express");
const router = express.Router();

const Person = require('./../models/person');
const {jwtAuthMiddleware, generateToken} = require('./../jwt');

// post route to adda person
  router.post('/signup', async (req, res)=>{
try{
  const data = req.body //assuming the request body contains the person data

  //create a new person document using the mongoose model
  const newPerson = new Person(data);

  //save the new person to the databadse 
  const response = await newPerson.save();
  console.log('data saved')

  const payload ={
    id: response.id,
    username: response.username
  }
  console.log(JSON.stringify(payload));
  const token = generateToken(payload);
  console.log("Token is : ", token);

  res.status(200).json({response: response, token: token});
}

catch(err){
  console.log(err);
  res.status(500).json({error: 'internl server error'});
}
})

// Login route
router.post('/login', async(req, res) => {
  try{
    // extract username and password form request body
    const {username, password} = req.body;

    // find the user by username
    const user = await Person.findOne({username: username});

    // if user does not exist or password does not match, return error
    if (!user || !(await user.comparePassword(password))){
      return res.status(401).json({error: 'invalid username or password'});
    }

    // generate token
    const payload = {
      id : user.id,
      username: user.username
    }
    const token = generateToken(payload);

    // return token as response
    res.json({token})
  }catch(err){
    console.error(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

// profile route
router.get('/profile', jwtAuthMiddleware,async (req, res) => {
  try{
    const userData =req.user;
    console.log("user data: ",userData);

    const userId = userData.id;
    const user = await Person.findById(userId);

    res.status(200).json({user});
  }catch(err){
    console.error(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

//GET method to get the person
router.get('/', jwtAuthMiddleware,async (req, res) =>{
  try{
       const data =  await Person.find();
       console.log('data fetched successfuly')
       res.status(200).json(data);
  }catch(err){
       console.log(err);
       res.status(500).json({error: 'internl server error'});
  }
})

router.get('/:workType', async (req, res)=>{
  try{
      const workType = req.params.workType; // extract the work type from the url parameter
      if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
      
         const response = await Person.find({work: workType});
         console.log('response fetched');
         res.status(200).json(response);

      }else{
        res.status(404).json({error: 'invalid work type'});
      }
  }catch(err){
       console.log(err);
       res.status(500).json({error: 'internl server error'});
  }
})

router.put('/:id', async (req, res)=>{
  try{ 
    const personId = req.params.id; //extract the id from the url parameter
    const updatePersonData = req.body; //update data for the person
   
    const response = await Person.findByIdAndUpdate(personId, updatePersonData,{
    new: true, //return the updated document
    runValidators: true, //run mongoose validation
   })

   if (!response){
    return res.status(404).json({error: 'person not found'});
   }

   console.log('data updated');
   res.status(200).json(response);
  }
  catch(err){
    console.log(err);
       res.status(500).json({error: 'internl server error'});
  }
})


  router.delete('/:id', async (req, res)=>{
    try{
      const personId = req.params.id; //extract the id from the url parameter

      // asuming you have a person model
      const response = await Person.findByIdAndDelete(personId);
      if (!response){
    return res.status(404).json({error: 'person not found'});
   }
   console.log('data deleted');
   res.status(200).json({message: 'person deleted successfully'});
  

    }catch(err){console.log(err);
       res.status(500).json({error: 'internl server error'});

    }
  })
module.exports = router;