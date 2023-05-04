//Saber si esta un elemento.
let numbers = [1,2,3,4,8,6,9,7,10,5];
//Preguntemos si algo esta ahí.
console.log(numbers.includes(11));
console.log(numbers.includes(1));
console.log(numbers.includes(2));
console.log(numbers.includes(3));

//Hay que tener cuidad a la hora de validar strings, debido a que es case sensitive.
const nombres = ['Fabian', 'Maria', 'Karen', 'Adrian'];
console.log(nombres.includes('FABIAN'));//False
console.log(nombres.includes('Fabian')); //True
