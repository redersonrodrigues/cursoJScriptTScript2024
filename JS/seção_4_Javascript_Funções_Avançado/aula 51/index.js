// return = retorna um valor e termina a função
function soma(a,b) {
    return a + b;
}

console.log(soma(5,2));

// exemplo 2
function soma2(a,b) {
    return a + b;
};
soma2(5,2);

// exemplo 3 - função sem retorno mas que realiza algo
// ao clicar muda o fundo da tela
    // document.addEventListener('click',function () {
    //     document.body.style.backgroundColor = 'red';
    // });

// exemplo 4
function criaPessoa(nome,sobrenome) {
    return {nome,sobrenome};
};
p1 = new criaPessoa('Luiz', 'Otávio');

// com objeto literal ao invés de função
p2 = {
    nome: 'João',
    sobrenome: 'Miranda'
};
console.log(typeof p1);
console.log(typeof p2);


// exemplo 5

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('olá'); // a função falaResto é retornada dentro da função falaFrase e por isso é passada para olaMundo
console.log(olaMundo('Mundo')); // olaMundo recebe o valor da função falaResto que exige um parâmetro
// é como se tivesse :
const fala = falaFrase('Olá');
const resto = fala('Mundo');
console.log(resto); // perceba que retorna a mesma coisa

// exemplo 6
// function duplica(n) {
//     return n*2;
// }
// function triplica(n) {
//     return n*3;
// }
// function quadriplica(n) {
//     return n*4;
// }

// console.log(duplica(2));
// console.log(triplica(2));
// console.log(quadriplica(2));

// agora usando função dentro de função (função clousure)
function criaMultiplicador(multiplicador) {
    // multiplicador
    return function (n) { // função em forma simplificada
        return n * multiplicador;
    };
}


const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(4));
console.log(triplica(4));
console.log(quadriplica(4));