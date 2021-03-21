const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

let users = [
    {
        name:"Everton Nathan", 
        phone: "(566)7896-8541"
    },
    {
        name:"Everton Madara", 
        phone: "(566)7896-6541"
    },
    {
        name:"Everton Dante", 
        phone: "(566)7896-4141"
    },

]

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render('user', {users})
})

app.listen(3000, () => {
    console.log("Server Running on Port 3000")
})