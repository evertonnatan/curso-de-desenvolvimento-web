function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Goku", 25),
    novoAluno("Vegeta", 29),
    novoAluno("Naruto", 19),
    novoAluno("Itachi", 39),
    novoAluno("Madara", 42),
]

// PELO MÉTODO LONGO (OU SEJA, SEM USAR O FILTER)

for (let aluno of alunos) {
    if ( aluno.idade < 30 ) {
        console.log(aluno.nome)
    }
}

/*

SAÍDA: 

Goku
Vegeta
Naruto

*/

// USANDO O FILTER:

function temMenosde30(aluno) {
    return aluno.idade < 30
}
let alunosComMenosde30 = alunos.filter(temMenosde30)
console.log(alunosComMenosde30)