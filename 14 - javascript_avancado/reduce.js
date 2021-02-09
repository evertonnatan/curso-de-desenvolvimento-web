// O MÉTODO "reduce" PODE SER USADO PARA REDUZIR TODAS AS ENTRADAS DE UM ARRAY NUMA ÚNICA ENTRADA

// EXEMPLO:

function novoAluno (nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno('Mario', 23),
    novoAluno('José', 45),
    novoAluno('Xuxa', 29),
    novoAluno('Senna', 35)
]

function idadeDaTurma (nomezao, aluno ){
    return nomezao + aluno.nome;
}

console.log(alunos.reduce(idadeDaTurma, "alguma coisa antes"))