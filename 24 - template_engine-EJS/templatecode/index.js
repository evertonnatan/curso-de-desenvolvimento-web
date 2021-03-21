const express = require('express')
const fs = require('fs')
const app = express()

let user = {
    id: 0,
    name: "Nathan",
    phone: "(51)234-4321",
}

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.listen(3000, () => {
    console.log("Server Running on Port 3000")
})