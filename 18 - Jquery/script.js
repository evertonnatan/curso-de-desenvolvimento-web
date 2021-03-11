// A cada execução da função, o Jquery retorna o própŕio objeto.

let jq = $("#lista").slideUp(2000)
                    .slideDown(2000)
                    .fadeOut(1500)
console.log(jq)

// O Jquery é um conjunto muito grande de funções

let objeto = {
    print10: function () {
        console.log(10)
        return this
    },
    print20: function () {
        console.log(20)
        return this
    }
}

objeto.print10().print10().print20().print20().print10().print10()


