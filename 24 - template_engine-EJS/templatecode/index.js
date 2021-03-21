const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

let users = [
    {
        id: 0,
        name:"Everton Nathan", 
        phone: "(566)7896-8541"
    },
    {
        id: 1,
        name:"Everton Madara", 
        phone: "(566)7896-6541"
    },
    {
        id: 2,
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