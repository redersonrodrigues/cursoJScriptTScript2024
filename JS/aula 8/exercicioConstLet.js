/*
* Luiz Otávio Miranda tem 30 anos, pesa 84 kg
* Tem 1.8 de altura e seu IMC é de 25.925925925925924
* Luiz Otávio nasceu em 1980.
* obs: Calculo do IMC = peso/(altura * altura)
**/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal;
let anoNascimento;
const ano = 2019; 
indiceMassaCorporal = peso/(alturaEmM*alturaEmM);
anoNascimento = ano - idade;
// modo convencional
//console.log(nome+' '+ sobrenome +' tem ' +idade+ ' anos, pesa ', peso,'kg');
// modo template string
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`Tem ${alturaEmM} seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);