// const verdadeira = true;

// let nome = 'Luiz'; // criando
// var nome2 = 'Luiz'; // criando

// //  let tem escopo de bloco = { ... bloco }
// // var só tem escopo de função

// if (verdadeira) {
//     let nome = 'Otávio'; // criando nova variável dentro do bloco, não é a mesma de fora por isso aceita nome igual com let
//     var nome2 = 'Tonho'; // redeclarando

//     console.log(nome,nome2);
//     if (verdadeira) {
//         let nome = 'outra coisa';
//         var nome2 = 'Dalua'; // redeclarando

//         console.log(nome,nome2);
        
//     }
    
// }
// // variável externa pode ser acessada dentro das funções mas o contrario não 
// var sobrenome = 'Miranda';

// function falaOi() {
//     if (verdadeira) {
//         let nome = 'Luiz';
//         var sobrenome = 'Miro';
//     }
//     console.log(sobrenome);
    
// }

// falaOi();
/** OBS: roite = eleva a variavel ao topo, onde faz a declaração de variaveis, quando usa var = o resultado é undefined
 * Com let = da  um erro se declarar a variavel depois do local que está a usando.
 */