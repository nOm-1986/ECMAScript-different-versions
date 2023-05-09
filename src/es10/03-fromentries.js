/**
 * Pasar de un array a objetos.
*/
const entries = new Map([["name","Oscar"],["age", 36]]);
const entries2 = new Map(["name","Oscar","fabian",'Beltran']); //De esta forma no funciona, debe ser un [[clave, valor],[clave, valor]]
console.log(Object.fromEntries(entries2));
console.log(entries);
console.log(Object.fromEntries(entries));