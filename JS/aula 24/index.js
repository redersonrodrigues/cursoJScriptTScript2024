const hora = 18;
// if (hora <= 12) {
//     console.log('Bom dia');
//     console.log(1+1);
// }

if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
} else if (hora >=12 && hora <= 17) {
    console.log('Boa tarde');
}else if(hora >= 18 && hora <= 23) {
    console.log('Boa noite');
}