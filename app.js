
//*SETUP FOR DEPENDENCIES 

const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const mongoose = require('mongoose')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

//*TODO

app.listen(3000, ()=>{
    console.log('Server running on port 3000 l')
})


