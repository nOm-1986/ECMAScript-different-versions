//Entries
const countries = {CO: 'Colombia', CL: 'Chile', PE:'Perú', MX:'Mexico', AR: 'Argentina', UR: 'Uruguay'};
const soloValor = [1, 3,4,5,6,7,6];
//Entries: Transforma un objeto en un arreglo, donde cada uno de los elementos en este caso es otro array -> clave / valor;
console.log(Object.entries(countries));
console.log(Object.entries(soloValor));
/**
 * [
 *  [CO , Colombia]
 *  [CL , Chile] ...
 * ]
 */


/**
 * Object.values
 * Retorna en un arreglo solo los valores, no las llaves.
 */
const countries2 = {CO: 'Colombia', CL: 'Chile', PE:'Perú', MX:'Mexico', AR: 'Argentina', UR: 'Uruguay'};
console.log(Object.values(countries2));

/**
 * Object.keys
 * Retorna en un arreglo solo los valores de las llaves.
 */
console.log(Object.keys(countries2));