// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A
// const letras = [b,c,a];
// [a,b,c] = letras;

// console.log(a,b,c);

/** ... rest, ... spread */
// const numeros = [1000 , 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
//const [primeiroNumero,segundoNumero] = numeros;
// console.log(primeiroNumero,segundoNumero);
//const [um, dois, tres, ...resto] = numeros; // rest operator
// console.log(resto);
// const [um,,tres,,cinco,,sete] = numeros;
// console.log(um, tres, cinco);

//indice            0       1       2
//                0 1 2   0 1 2   0 1 2
const numeros = [[1,2,3],[4,5,6],[7,8,9]];
console.log(numeros[1][2]);
// com desistruturação
const [,[,,seis]] = numeros;
console.log(seis);
// mais facil
const [lista1,lista2,lista3] = numeros;
console.log(lista3[2]);


 