const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320,
    }
};

//console.log(pessoa.nome);

// const nome = pessoa.nome;
// console.log(nome);

// atribuição via desistruturação
// const {nome = 'Valor padrão', sobrenome,idade} = pessoa; // valor padrão é para no casa de não existir a variavel no objeto
// console.log(nome, sobrenome);

// mudar o nome da variavel
// const {nome: mudeiONomeDaVariavel = '', sobrenome, idade } = pessoa;
// console.log(mudeiONomeDaVariavel, sobrenome);

const { endereco: {rua,numero}, endereco} = pessoa; // pegando os campos do objeto endereco dentro do objeto pessoa
console.log(rua,numero, endereco);

const {nome, sobrenome, ...resto} = pessoa; // não mostre o nome nem o sobrenome, mostre apenas o restante dos campos do objeto
console.log(resto);
