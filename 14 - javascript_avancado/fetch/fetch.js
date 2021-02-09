// CRIANDO UMA API QUE CONVERTE, TEM TEMPO REAL, UM VALOR EM REAIS PARA DÓLARES AMERICANOS

let url = ("https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL")

function converter() {
    let input = document.getElementById("valor")
    let valor = input.value
    console.log(valor)


    fetch(url)
        .then((res) => {

            return res.json()
        })
        .then((data) => {
            console.log(data)
            let rate = data.rates.BRL

            let resultado = `${valor} dólares = ${rate * valor} em reais`
            document.getElementById("resultado").innerHTML = resultado
        })
}