const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {
    
//     if (numero === 2){ // retorna  no inicio e continua do próximo, logo após onde encontrou true, no caso o numero 2
//         console.log('Pulei o numero 2');
//         continue;
//     }

//     if (numero === 7) {
//         console.log('Parei assim que encontrei o "7"( e não exibi nada que está abaixo. )');
        
//         break;
//     }

//     console.log(numero);
    
// }

// for (let i in numeros) {
//     let numero = numeros[i];
    
//     if (numero === 2){ // retorna  no inicio e continua do próximo, logo após onde encontrou true, no caso o numero 2
//         console.log('Pulei o numero 2');
//         continue;
//     }

//     if (numero === 7) {
//         console.log('Parei assim que encontrei o "7"( e não exibi nada que está abaixo. )');
        
//         break;
//     }

//     console.log(numero);
    
// }

// for (let i=0;i < numeros.length; i++) {
//     let numero = numeros[i];
    
//     if (numero === 2){ // retorna  no inicio e continua do próximo, logo após onde encontrou true, no caso o numero 2
//         console.log('Pulei o numero 2');
//         continue;
//     }

//     if (numero === 7) {
//         console.log('Parei assim que encontrei o "7"( e não exibi nada que está abaixo. )');
        
//         break;
//     }

//     console.log(numero);
    
// }

// let i=0;
// while (i < numeros.length) {
//     let numero = numeros[i];
    
//     if (numero === 2){ // retorna  no inicio e continua do próximo, logo após onde encontrou true, no caso o numero 2
//         console.log('Pulei o numero 2');
//         i++; // para evitar loop infinito
//         continue;
//     }


//     console.log(numero);// esta aqui para mostrar o 7 antes do if abaixo que possui o break

//     if (numero === 7) {
//         console.log('Parei assim que testei o "7"(break). )');
//         i++; // para evitar loop infinito
//         break;
//     }

//     i++;
    
// }
let i=0
do {
    let numero = numeros[i];
    
    if (numero === 2){ // retorna  no inicio e continua do próximo, logo após onde encontrou true, no caso o numero 2
        console.log('Pulei o numero 2');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Parei assim que encontrei o "7"( e não exibi nada que está abaixo. )');
        i++; 
        break;
    }

i++;
    
} while (i < numeros.length) ;