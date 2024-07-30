let num1 = 9.54578;
let arredondaParaBaixo = Math.floor(num1);
let arredondaParaCima = Math.ceil(num1);
let arredondaParaMaisProximo = Math.round(num1)
let maiorNumeroDaSequencia = Math.max(1,2,3,4,5,-2,-6,90,1500,-4,30);
let menorNumeroDaSequencia = Math.min(1,2,3,4,5,-2,-6,90,1500,-4,30);
let aleatorio = Math.round(Math.random() * (10 - 5) + 5); // numeros aleatorios entre 10 e 5
let pi = Math.PI;
let exponenciacao = Math.pow(2,10); // 2 elevado a 10
let exponenciacaoOperador = 2 ** 10;
let raizQuadradaOperador = num1 ** 1/2; // poderia ser (numeroQualquer ** 0,5)

console.log(arredondaParaBaixo);
console.log(arredondaParaCima);
console.log(arredondaParaMaisProximo);
console.log(maiorNumeroDaSequencia);
console.log(menorNumeroDaSequencia);
console.log(aleatorio);
console.log(pi);
console.log(exponenciacao);
console.log(exponenciacaoOperador);
console.log(raizQuadradaOperador);

// Obs: cuidado com divisão por zero, em javascript não da erro, o resultado é Infinity
console.log(100/0);

console.log(!!(100/0)); // testa verdadeiro ou falso