// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 500;

// if normal
// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal.');
    
// }

// ternária
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal.';

// fallback
const corUsuario = null;// se null escolhe a padrão(no caso = preta), se outra cor escolhe a cor informada
const corPadrao = corUsuario || 'Preta';



console.log(nivelUsuario, corPadrao);
