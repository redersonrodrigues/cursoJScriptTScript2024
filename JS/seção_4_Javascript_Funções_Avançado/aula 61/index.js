// Função geradora
function* geradora1() {
  // codigo qualquer
  yield 'Valor 1';
  // codigo qualquer
  yield 'Valor 2';
  // codigo qualquer
  yield 'Valor 3';
}

const g1 = geradora1();
// console.log(g1.next().value); // quando roda a 1ª vez retorna o primeiro yield
// console.log(g1.next().value); // quando roda a 2ª vez retorna o segundo yield
// console.log(g1.next().value); // quando roda a 3ª vez retorna o terceiro yield
// console.log(g1.next().value); // quando roda a 4ª vez retorna erro informando undefined, sinalizando que acabou os yield


for (let valor of g1) { // retorna os valores do yield
  console.log(valor);
}

// exemplo 2 - contador infinito
function* geradora2(){
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

// exemplo 3 - gerador que delega tarefa para outro gerador
function* geradora3(){
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4(){
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

// const g4 = geradora4();
// for (let valor of g4) {
//   console.log(valor);
// }

// continuando exemplo anterior com emprego de funções
function* geradora5(){
  yield function(){
    console.log('Vimm do yield 1 da função geradora 5');
  };

  // se tivesse return neste ponto o codigo seria encerrado aqui
  // return function(){
  //   console.log('Vim do return e encerrei a aplicação neste ponto');
  // }

  yield function(){
    console.log('Vim do yield 2 da função geradora 5');
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();