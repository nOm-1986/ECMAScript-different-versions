/**
 * Trailing commas
 * Genera items vacios dentro de un array. Según encontre es más para evitar errores.
 * Lo que permite es agregar una coma al final del array
 */

const a = [25,26,27,,,];
console.log(a); // [25,26,27, <2 empty items>]
console.log(a.length); // 5