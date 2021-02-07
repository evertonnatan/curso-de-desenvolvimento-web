let usuarios = ["Adriano", "Marcia", "José"]

function inserirUsuario(nome) {
    
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        usuarios.push(nome)
        let error = false

        if (!error) {
            resolve()
        } else {
            reject({ msg: "Erro de qualquer coisa"})
        }
    }, 1000)
})
return promise
}

function listarUsuarios() {
    console.log(usuarios)
}

inserirUsuario("Natã")
    .then(listarUsuarios)
    .catch((error) => {
        console.log(error)
    })