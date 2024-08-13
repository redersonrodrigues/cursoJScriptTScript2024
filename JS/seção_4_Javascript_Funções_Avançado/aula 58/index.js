// Função fabrica (factory) => fabrica objetos,
// Função construtora (construct) => constrói objetos
// Construtora = Pessoa (new)
// São molde para gerar novos objetos

function Pessoa(nome, sobrenome) {
  // atributo privado
  const ID = 123456; // não fica disponivel fora do escopo da função construtora
  // metodo privado
  const metodoInterno = function () { // não fica disponivel fora do escopo da função contrutora
    console.log('metodo interno');
  }
  // usando o this => são atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + `: Sou um método`);
  };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

// console.log(p1);
console.log(p1.nome);
console.log(p1.sobrenome);
p1.metodo();



// console.log(p2);
console.log(p2.nome);
console.log(p2.sobrenome);
p2.metodo();