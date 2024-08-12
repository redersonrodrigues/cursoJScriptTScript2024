// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;    
// }

// console.log('Segue a vida...');


// const nome = 'Luiz';

// while (i < nome.length) {
//     console.log(nome[i]);
//     i++;    
// }

// console.log('Segue a vida...');

function random(max, min) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); // numero inteiro(floor)
}
const min = 1;
const max = 50;
// let rand = random(min, max);
let rand = 10;


// console.log(rand);

// com while = primeiro verifica e depois executa
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);

}

console.log('###########');
// com do/while =  primeiro executa e depois verifica se confere
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);
