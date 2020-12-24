// Mudando uma imagem de uma página web, ao clicá-la:

let image = document.getElementById("kratos")

image.addEventListener("click", function(){
    let lastImage = image.getAttribute("src")
    image.setAttribute("src", "./imagens/pic02.jpg")

    console.log(lastImage)
})

let lista = document.getElementById("lista")
let num = parseInt(lista.getAttribute("num"))

let conteudo = ""

for(let i = 0; i < num; i++) {
    conteudo += "<li>" + i + "</li>"
}

lista.innerHTML = conteudo