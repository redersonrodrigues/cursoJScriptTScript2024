// Escreva uma função que receba 2 numeros e retorne o maior deles

function retornaMaiorNumero(x, y) {
    // modo verboso
    // if (x>y) {
    //     return x;
    // }else{
    //     return y;
    // }
    // // modo melhoria 1
    // if (x>y) {
    //     return x;
    // }
    // return y;
    // // modo melhoria 2
    return (x > y) ? x : y;
}
console.log(retornaMaiorNumero(10, 22));

    // // modo melhoria 3
    // const max = (x,y) => {
    //     return x > y ? x : y;
    // };

    // modo melhoria 4
    const max = (x,y) => x > y ? x : y;
        

// const maior = retornaMaiorNumero(10, 22);
// console.log(maior);

console.log(max(300, 879));
