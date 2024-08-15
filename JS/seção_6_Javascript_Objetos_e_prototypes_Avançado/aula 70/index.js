// const pessoa = {
//     nome: 'Luis',
//     sobrenome: 'Otávio'
// };

// console.log(pessoa.nome, pessoa['sobrenome']);

// const chave = 'nome';
// console.log(pessoa[chave]);

// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio'
// pessoa1.falarNome = function () {
//     return `estou falando o nome: ${this.nome}`;
// };
// pessoa1.idade = 51;
// pessoa1.getDataNascimento = function () {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };


// // delete pessoa1.nome;
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.falarNome());
// console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1) {
//     console.log(chave,pessoa1[chave]);
// }

// Factory Functions / Constructor Functions /  Classe
function criaPessoa(nome, sobrenome) { // Factory Function
    return {
        nome: nome,
        sobrenome: sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.nomeCompleto);

function Pessoa(nome,sobrenome) { // Constructor Function
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // proibe alterar qualquer coisa neste objeto (Pessoa) - funciona com array tambem
}

const ps1 = new Pessoa('Luiz','Miranda');
// Object.freeze(ps1); // congela o objeto e não pode ser alterado
ps1.nome = 'Outra coisa';
const ps2 =  new Pessoa('Maria','Fedida');
console.log(ps1);
console.log(ps2);