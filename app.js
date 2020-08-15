const express = require("express");
const DB = require('./db')


//Initialize App
const app = express();

//Middleware

app.use(express.json())


// Initialize Routes
const registration = require('./routes/registration')


//Get Routes
app.use('/registration',registration)



//Home Routes

app.get('/',(req,res)=>{
    res.send("Home Route")
})


// Initialize Server

app.listen(3000, () => {
    console.log("Server is running")
})

