/**
 * Existen dos formas de hacer desctructuración.
 * con arrays y con objetos.
 */

//Arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[0]);


// Object destructuring
let user = { username: 'Fabian', age: 36};
let {username, d} = user;
console.log(username, d, user.username);