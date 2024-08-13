// função recursiva é uma função que se chama de volta, tem que estar atento quando ela deve parar(você determina)
// call stack => é um plano de contingência da linguagem que prevê o maximo que a recursividade pode ser executada, 
// ou seja, para evitar looping infinito.
function recursiva(max) {
  if (max >= 10) return;
  max++;
  console.log(max);
  recursiva(max);
}
recursiva(0);