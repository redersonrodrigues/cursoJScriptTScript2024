// só vale para funções normais, não funciona com as demais
// arguments guarda os valores contidos como parâmetro e permite
// trabalhar como se fosse array
function funcao() {
    console.log('oie');
    console.log(arguments);
    console.log(arguments[0]);
    console.log(`tamanho: ` + arguments.length);

}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9);

// exemplo
// argumentos que sustenta todos os argumentos enviados
function somar(a, b, c) { // tanto faz declarar os parametros
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(`soma dos parametros: ` + total, a, b, c); // arguments contém os parametros todos declarados
}
somar(1, 2, 3, 4, 5, 6, 7);

// exemplo 2
function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f,);
}
funcao2(1, 2, 3);

// exemplo 3
function funcao3(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao3(2, 10);
funcao3(2, 10, 20);
funcao3(2, undefined, 20);

// exemplo 4
function funcao4({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
// funcao4({nome:'luis',sobrenome:'otávio',idade:30}); // ou
const obj = { nome: 'luis', sobrenome: 'otávio', idade: 30 };
funcao4(obj);

// exemplo 5
function funcao5([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
// funcao5(['luis otávio','miranda',30]); // ou
const obj2 = ['luis otavio', 'miranda', 30];
funcao5(obj2);

// exemplo 6 = rest operator

function funcao6(operador, acumulador, ...numeros) {
    // console.log(operador,acumulador,numeros);
    for (let numero of numeros) {
        // console.log(numero);
        // somar usando o acumulador
       if (operador === '+') acumulador += numero;
       if (operador === '-') acumulador -= numero;
       if (operador === '/') acumulador /= numero;
       if (operador === '*') acumulador *= numero;

    }
    console.log(acumulador);
    
}
funcao6('+', 0, 20, 30, 40, 50);
funcao6('-', 200, 20, 30, 40, 50);
funcao6('/', 1, 20, 30, 40, 50);
funcao6('*', 2, 20, 30, 40, 50);

// exemplo 7 = com function expression
const conta = function (operador, acumulador, ...numeros) {
    console.log(arguments);
};
conta('+',1,20,30,40,50);

// exemplo 8 = arrow function 
const conta1 = (operator,acumulador,...numeros) => {
    console.log(operator,acumulador,numeros);
};
conta1('+',1,20,30,40,50);

// exemplo 9 = sempre que precisar enviar parametros indeterminados user o rest operator como segue
const conta2 = (...args) => {
    console.log(args);
};
conta2('+',1,20,30,40,50);