/* Toda variável local pode ser acessada apenas no escopo que ela foi criada, 
uma função, por exemplo. Toda variável global, pode ser acessada de qualquer lugar do programa.*/


//DEFININDO A VARIÁVEL LOCALMENTE:
function imprimir1() {
    var x = 8
    console.log(x)
}

imprimir1()
console.log(window)


//DEFININDO A VARIÁVEL GLOBALMENTE:
function imprimir2() {
    x = 9 // perceba que, aqui, "x" não foi precedida de "var"
    console.log(x)
}

imprimir2()
console.log(window)

// O "use strict" TORNA OBRIGATÓRIA A DECLARAÇÃO DE TODAS AS VARIÁVEIS NO CÓDIGO.