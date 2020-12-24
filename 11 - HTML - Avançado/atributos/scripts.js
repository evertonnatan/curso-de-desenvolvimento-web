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

// Usando atributos personalizados com "dataset"


// Configurando os controles do vídeo:

let video = document.getElementById("video1")

function retroceder(){
    video.currentTime -= 15
}
function avancar(){
    video.currentTime += 15
}
function diminuir_velocidade(){
    video.playbackRate -= 0.1
}
function aumentar_velocidade(){
    video.playbackRate += 0.1
}
function play(){
    video.play()
}
function stop(){
    video.pause()
    video.currentTime = 0
}

// DESAFIO: COMO ESCONDER OS CONTROLES DO VÍDEO??
