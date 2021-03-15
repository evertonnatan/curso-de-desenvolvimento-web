// IMPORTANDO O EXPRESS:
const express = require('express')
const path = require('path')

const app = express()

app.use("/meusite", express.static(path.join(__dirname, 'client')))

app.get("/", (req, res) => {
    // res.set("Content-Type", "text/html")

    res.type("html")
    res.send("<h1>Hello World From GET</h1>")

    //TIPOS MAIS COMUNS:

    // res.type('.html') => 'text/html'
    // res.type('html') => 'text/html'
    // res.type('json') => 'application/json'
    // res.type('application/json') => 'application/json'
    // res.type('png') => 'image/png'
    // res.type('txt') => 'text/plain'
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server Running on Port:${PORT}`)
})
