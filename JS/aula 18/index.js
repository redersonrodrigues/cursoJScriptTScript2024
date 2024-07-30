// const pessoa1 = {
//     nome : 'Luiz',
//     sobrenome:  'Miranda',
//     idade: 25
// };

// const pessoa2 = {
//     nome : 'Maria',
//     sobrenome:  'Oliveira',
//     idade: 55
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);


// /** COM FUNÇÕAO */
// function criaPessoa(nome, sobrenome, idade) {
//     // return {
//     //     nome: nome,
//     //     sobrenome: sobrenome,
//     //     idade:idade
//     // };
//     return { nome, sobrenome, idade };
// }
// const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
// const pessoa2 = criaPessoa('Maria', 'Miranda', 55);
// const pessoa3 = criaPessoa('João', 'Oliveira', 45);
// const pessoa4 = criaPessoa('Junior', 'Cabral', 37);
// const pessoa5 = criaPessoa('Jean', 'Peterson', 28);


// console.log(pessoa1.nome, pessoa2.sobrenome);

/** Metodo dentro do objeto - permite o uso do this */
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        // console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha atual idade é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();