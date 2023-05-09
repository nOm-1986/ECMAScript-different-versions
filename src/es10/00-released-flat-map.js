/** 
 * ENERO 2019 - Released on Juanary 2019.
 * 
 * FLAT: Devuelve una matriz de cualquier sub-matriz.
 * El parametro que se pasa es el de profundidad. La profundidad inicia desde el nivel 0.
 * For instance: flat(1):  [1,2,3,4,5,10,11,12,13,14,[ 20, 21, 22, 23, [ 30, 31, 32, 33 ] ]
 * For instance: flat(2): [1,2,3,4,5,10,11,12,13,14,20,21,22,23, [ 30, 31, 32, 33 ] ]
 * For instance: flat(3): [1,2,3,4,5,10,11,12,13,14,20,21,22,23,30,31,32,33]
*/

const array = [ 1, 2, 3, 4, 5, [10,11,12,13,14 ,[20, 21, 22, 23, [30,31,32,33, [44,45,46]] ] ] ];
console.log(array.flat(Infinity));
console.log(array.flat(4));
console.log(array.flat(3));
console.log(array.flat(2));
console.log(array.flat(1));


/**
 * FLAT MAP: => Recibe un Callback
 * Aplana el resultado basado en una función de mapeo.
*/

const array2 = [1,2,3,4,5, [10,11,12,13,14, [20,21,22,23, [30,31,32,33] ] ] ];
console.log(array2.flatMap(n => [n]));

const array3 = [1,2,3,4,5, [6,7,8,9]];
console.log(array3.flatMap( v => v * 2));
console.log(array3.flatMap( v => [v, v * 2]));
