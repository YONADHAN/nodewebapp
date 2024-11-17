const express = require('express')
const app = express()
const env = require('dotenv').config()
const db = require('./config/db')
db()


const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})

module.exports = app