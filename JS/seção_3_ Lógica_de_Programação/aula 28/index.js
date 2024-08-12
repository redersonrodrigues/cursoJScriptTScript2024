// const data = new Date();

const tresHoras = ((60 * 60)*3)*1000; // 60 x 60 = 1 hora => x 3 = 3 horas => x 1000 (milesimos de segundo)

const umDia = 60 * 60 * 24 * 1000; // 1 dia em milésimos de segundo

// marco zero
const data = new Date(0 + tresHoras);//01/01/1970 Timestamp unix ou época unix (foi somado 3 horas porque estamos no +3 GMT Brasilia)
console.log(data.toString());

const data1 = new Date(0 + tresHoras + umDia);//marco zero mais um dia
console.log(data1.toString());

const data2 = new Date(0 + tresHoras - umDia);//marco zero menos um dia
console.log(data2.toString());

const data3 = new Date(2019,3,20,15,14,27,500);// a,m,d,h,M,s,ms
console.log(data3.toString());

const data4 = new Date('2019-04-20 20:15:59.100');// a,m,d,h,M,s,ms
console.log('Dia', data4.getDate());
console.log('Mês', data4.getMonth());
console.log('Ano', data4.getFullYear());
console.log('Hora', data4.getHours());
console.log('Minuto', data4.getMinutes());
console.log('Segundo', data4.getSeconds());
console.log('Milésimo Segundo', data4.getMilliseconds());
console.log('Dia da Semana', data4.getDay()); // 0 - domingo 6 - sabado
console.log(data4.toString());

const data5 = new Date(1722971130110);
console.log(Date.now());
console.log(data5);
console.log(data5.toString());

/** Criando uma função para formatar data */
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
};

function formataData(data) {
    const dia       = zeroAEsquerda(data.getDate());
    const mes       = zeroAEsquerda(data.getMonth() + 1); // mes no Brasil começa no 1 e não no zero
    const ano       = zeroAEsquerda(data.getFullYear());
    const hora      = zeroAEsquerda(data.getHours());
    const minuto    = zeroAEsquerda(data.getMinutes());
    const segundo   = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
};

const data6 = new Date();
const dataBrasil = formataData(data6);
console.log(dataBrasil);
