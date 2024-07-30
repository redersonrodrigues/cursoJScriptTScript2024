// usando uma variavel
// let numero = prompt('Digite um número');
// numero = Number(numero);

// usando Number direto na pergunta
const numero = Number(prompt('Digite um número'));
const numeroTitulo = window.document.getElementById('numero-titulo');
const texto = window.document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `seu numero é ${numero} </br>`;
texto.innerHTML += `A raiz quadrada é ${(numero ** 0.5)} </br>`;
texto.innerHTML += `${numero} é inteiro?: ${Number.isInteger(numero)} </br>`;
texto.innerHTML += `É NaN?: ${Number.isNaN(numero)}</br>`;
texto.innerHTML += `Arredondando para baixo ${Math.floor(numero)} </br>`;
texto.innerHTML += `Arredondando para cima ${Math.ceil(numero)} </br>`;
texto.innerHTML += `Com duas casas decimais ${numero.toFixed(2)} </br>`;