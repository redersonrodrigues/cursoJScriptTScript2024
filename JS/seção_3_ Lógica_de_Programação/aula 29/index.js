// const data = new Date('1987-04-21 00:00:00');

// let diaSemana = data.getDay();

// let diaSemanaTexto;

/** Modo com If */
// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda-feira';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça-feira';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta-feira';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta-feira';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta-feira';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sabado';
// }
// console.log(diaSemana, diaSemanaTexto);

// diaSemana = 7;
// usando Switch
// switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         break;
//     case 1:
//         diaSemanaTexto = 'Segunda-feira';
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça-feira';
//         break;
//     case 3:
//         diaSemanaTexto = 'Quarta-feira';
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta-feira';
//         break;
//     case 5:
//         diaSemanaTexto = 'Sexta-feira';
//         break;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         break;
//     default:
//         diaSemanaTexto = 'Dia da semana inválido'
//         break;
// }
// console.log(diaSemana, diaSemanaTexto);

/** USANDO DENTRO DE UMA FUNÇÃO */

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Dia da semana inválido'
            return diaSemanaTexto;
    }
}

const data = new Date('1973-08-31 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemana,diaSemanaTexto);
