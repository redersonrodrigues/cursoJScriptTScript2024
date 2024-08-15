class Pessoa {
    constructor(nome,sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
falar(){
    console.log(`${this.nome} está falando`);    
}
comer(){
    console.log(`${this.nome} está comendo`);    
}
beber(){
    console.log(`${this.nome} está bebendo`);    
}

}



const p1 = new Pessoa('Luis','Miranda');
const p2 = new Pessoa('Pedro','Paulo');
const p3 = new Pessoa('Paulo','Oliveira');
const p4 = new Pessoa('Glória','Maria');

console.log(p1);
console.log(p1.falar());
console.log(p2);
console.log(p2.comer());
console.log(p3);
console.log(p3.beber());
console.log(p4);



// relembrando como seria a função construtora em se comparando com classe

function Pessoa2(nome,sobrenome){
    this.nome =  nome;
    this.sobrenome = sobrenome;
};

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`); 
}

const p5 = new Pessoa('Tenorio','Bomba');
const p6 = new Pessoa2('Coniterio', 'Nitrato');
console.log(p5);
console.log(p6);
