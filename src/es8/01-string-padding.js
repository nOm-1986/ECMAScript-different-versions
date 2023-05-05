/**
 * padStart me pertmite rellenar al inicio;
 * padEnd me pertmite rellenar al final;
 * No modifica el string, para modificarlo debo miCadena = miCadena.padStart(3,'algo');
 * Solo funciona con tipo STRING
 * 
 */
const cadena = 'Fabian';
console.log(cadena.padStart(10,'_'));
console.log(cadena.padEnd(10,'_'));

const arreglo = {hi: 'hola'};
console.log(arreglo.padStart(1,'Hola'));

let emojics = '✨';
emojics = emojics.padStart(20,'🎈');
emojics = emojics.padEnd(40,'-');
console.log(emojics);

