// Construtora -> molde classe
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => `ORIGINAL: ${this.nome} + ' ' + ${this.sobrenome}`;
}
// pessoa1.prototype === pessoa1.__proto__

// Pessoa.prototype.estouAqui = 'hahahahaha';
Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} + ' ' + ${this.sobrenome}`;
}


// instancia
const pessoa1 = new Pessoa('Luiz', 'O.'); // Pessoa <- Função Construtora
const pessoa2 = new Pessoa('Maria','A.'); // Pessoa <- Função Construtora
const data = new Date() // Date <- Função Construtora



console.dir(pessoa1);
console.dir(pessoa2);
console.log(data);


