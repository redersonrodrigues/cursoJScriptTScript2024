// new Object -> Object.prototype
const objA = {
    chaveA: 'A',
    // __proto__: Object.prototype
};
const objB = {
    chaveB: 'B',
    // __proto__: objA
};
const objC = new Object();
objC.chaveC = 'C;'

Object.setPrototypeOf(objB,objA); // isso permite acessar objA pelo B e vice-versa
Object.setPrototypeOf(objC,objB); // posso ir encadeando 

console.log(objB.chaveA);
console.log(objC.chaveB);


function Produto(nome,preco) {
    this.nome = nome,
    this.preco = preco    
};

Produto.prototype.desconto = function (percentual) {
    this.preco -= (this.preco*(percentual/100));
};
Produto.prototype.aumento = function (percentual) {
    this.preco += (this.preco*(percentual/100));
};

const p1 = new Produto('Camiseta', 50);

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};

//pode ser criado assim
// const p3 = Object.create(Produto.prototype);
// p3.preco = 115.00;

// ou assim
const p3 = Object.create(Produto.prototype,{
    preco: {
        writable:true,
        configurable:true,
        enumerable:true,
        value: 160,
    },
    tamanho:{
        writable:true,
        configurable: true,
        enumerable:true,
        value: 42
    }
});

// para que p2 tenha acesso aos metodos criados no prototype
Object.setPrototypeOf(p2,Produto.prototype);

// p1.desconto(100);
p1.aumento(100);

// p2.aumento(10);
p2.desconto(10);

// p3.aumento(50);
p3.desconto(50);

console.log(p1);
console.log(p2);
console.log(p3);

