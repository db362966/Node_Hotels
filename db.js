const mongoose = require('mongoose');


//define the mongodb connection url
const mongoURL = "mongodb://127.0.0.1:27017/hotel"

//setup mongodb conecion
mongoose.connect(mongoURL);
    

//set the defaut conection
//mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection;


//defin event listner for database connection
db.on('connected', () => {
    console.log('connected to mongdb server');
});


db.on('error', () => {
    console.log('mongodb connection error');
});

db.on('disconnected', () => {
    console.log('mongodb disconnected');
});


//export the database connection
module.exports = db;