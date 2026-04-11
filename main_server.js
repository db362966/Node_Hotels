require('dotenv').config();
const express = require("express");
const app = express();
const db = require('./db');
const passport = require('./auth');
const bodyParser = require('body-parser');
app.use(bodyParser.json());//request.body me data store karega
const PORT = process.env.PORT || 3000;


// middleware function
const logRequest = (req, res, next)=>{
  console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
  next(); //move on to the next phase
}

app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})
app.get('/' ,function (req, res)  {
  res.send('welcome to my hotel .... how may i help you?')
})

//import the rouer files
const personRoutes = require('./routes/personRoutes');
const menuItemsRoutes = require('./routes/menuItemRoutes');
//use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemsRoutes);


app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000')
})