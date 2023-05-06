/**
 * Spread -> Solo sirve en el primer nivel.
 */

const user = { username: 'Fabo', age: 35, country: 'CO', leisure: 'Programing'};
const {username, age, ...values} = user;
console.log(username);
console.log(age);
console.log(values);