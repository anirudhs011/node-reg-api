const express = require('express')
const mongoose = require('mongoose')


require('dotenv/config')



const DB = () =>  {
const URI = process.env.DB_CONNECTION;
mongoose
.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to db"))
.catch(err => console.log(`Could not Connected to db ${process.env.DB_CONNECTION} `, err));

}

DB();

