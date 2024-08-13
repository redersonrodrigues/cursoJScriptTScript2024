// IIFE = Immediately invoke function expression
// envolvida por parenteses
(function () {
const nome = 'luiz';
console.log(nome);

})();

// const nome = 'Qualquer coisa'; // num influencia na IIFE


// exemplo 2
(function () {
  const sobrenome = 'Miranda';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  };
  function falaNome() {
    console.log(criaNome('Luiz'));
  };
  falaNome();
})();

// const nome = 'Qualquer coisa'; // num influencia na IIFE

// exemplo 3
(function (idade,peso,altura) { // parâmetros aqui
  const sobrenome = 'Miranda';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  };
  function falaNome() {
    console.log(criaNome('Luiz'));
  };
  falaNome();
  console.log(idade,peso,altura);
  
})(30,104,1.78); // lancei os argumentos aqui

const nome = 'Qualquer coisa'; // num influencia na IIFE