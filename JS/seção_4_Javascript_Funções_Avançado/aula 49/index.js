// Somente a declaração classica de função permite o (fuction hoinsting)
// Ou seja, não importa onde esteja dentro do código (inicio - fim)
// que ela vai ser executada de qualquer forma.
// As funções são objetos de primeira classe = First-class objects
function funcaoOi() {
    console.log('oie');
}
funcaoOi();
// function expression = função como dado, o que permite executar até mesmo uma 'função dentro de outra'
const souUmDado = function () {
    console.log('sou um dado');
}
souUmDado();

// exemplo de função que executa função
function executaFuncao(recebeFuncao) {
    console.log('vou executar sua função abaixo');
    
    recebeFuncao();
}
executaFuncao(souUmDado);

/** Arrow Function = é uma function expression bem mais curta */

const funcaoArrow = () => {
    console.log('sou uma arrow function');    
}
funcaoArrow();

// Funçao dentro de um objeto
const obj = {
    falar: function () {
        console.log('estou falando');
    },
    gritar(){
        console.log('Estou gritando!(lançado direto como função no objeto)');
    }
}
obj.falar();
obj.gritar();