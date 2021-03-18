const PORT = 3000
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

let posts = [
    {
        id: "jfkajsdfua",
        title: "Teste do Mural",
        description: "Descrição teste"
    },
    {
        id: "jfkajsdfua",
        title: "Teste do Mural",
        description: "Descrição teste"
    },
    {
        id: "jfkajsdfua",
        title: "Teste do Mural",
        description: "Descrição teste"
    },
]

app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts))
})

app.post("/new", (req, res) => {})

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})