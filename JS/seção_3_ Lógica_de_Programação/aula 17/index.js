function saudacao(nome) {
   //console.log(`Bom dia ${nome}`); 
   return `Bom dia ${nome}`;
}

//saudacao('Luiz');
// saudacao('Maria');
// saudacao('Felipe');

const variavel = saudacao('Luiz');
console.log(variavel);


// function soma(x,y) {
//     const resultado = x + y;
//     return resultado;
// }

// console.log(soma(2,2));
// console.log(soma(3,1));
// console.log(soma(5,10)); 

function soma(x = 1,y = 2) { // com valor padrão
    const resultado = x + y;
    return resultado;
}

console.log(soma(2)); // declarei apenas o x mas para dar o resultado assume o valor padrão de y

// const raiz = function(n){ // criada com variavel
//     return n ** 0.5;
// };
// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

// usando arrow function

// const raiz = (n) => { // criada com variavel
//     return n ** 0.5;
// };
// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

// se for somente um dado permite a simplificação
const raiz = n =>  n ** 0.5; // forma simplificada da arrow function

console.log(raiz(225));
