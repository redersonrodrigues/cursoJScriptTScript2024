// escreva uma função chamada ePaisagem que
// que recebe dois argumentos, largura e altura
// de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

// function ePaisagem(largura,altura) {
//     // return largura > altura ? true : false;
//     // melhoria 1
//     return largura > altura; // neste caso dispensa condicional
// }
// melhoria 2 = arrow function
const ePaisagem = (largura,altura) => largura > altura;
console.log(ePaisagem(1920,1080));
