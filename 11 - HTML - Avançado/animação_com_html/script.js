let jogador = document.getElementById("jogador")

let xInicial = 0
let yInicial = 0

function moverJogadorPara(x, y) {

    let posX = x + "px"
    let posy = y + "px"
    
    jogador.style.top = posX
    jogador.style.left = posy
}

setInterval(function() {
    moverJogadorPara(xInicial++, yInicial++)
}, 15)
