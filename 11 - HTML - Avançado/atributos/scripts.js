// Mudando uma imagem de uma página web, ao clicá-la:

let image = document.getElementById("kratos")

image.addEventListener("click", function(){
    let lastImage = image.getAttribute("src")
    image.setAttribute("src", "./imagens/pic02.jpg")

    console.log(lastImage)
})