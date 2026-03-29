const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/person');  //adjust the path as needed



passport.use(new LocalStrategy(async (USERNAME, password, done) => {
  //  authentication logic here
  try{
      //console.log('recieved credentials:', USERNAME, password);
       const user = await Person.findOne({username: USERNAME});
        if(!user)
        return done(null, false, { message: 'incorrect uername.'});

      const isPasswordMatch = await user.comparePassword(password);
      if(isPasswordMatch){
        return done(null, user);
      }else{
        return done(null, false,{message: 'incorrect password'});
      }
  }catch(error){
    return done(error);
  }
}));

module.exports = passport; //export configured passport
