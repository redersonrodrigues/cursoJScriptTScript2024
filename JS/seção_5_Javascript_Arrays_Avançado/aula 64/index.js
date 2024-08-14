const a1 = [1,2,3];
const a2 = [4,5,6];
// const a3 = a1 + a2; // não concatena, apenas junta os valores como se fosse string
// console.log(typeof a3);
// console.log(a3);
// const a3 = a1.concat(a2,[7,8,9,'Luiz']); // função concat junta os valores dos arrays
// console.log(typeof a3);
// console.log(a3);

// concatenar usando spread (...)
const a3 = [...a1,'Luiz',...a2,...[7,8,9]];
console.log(typeof a3);
console.log(a3);