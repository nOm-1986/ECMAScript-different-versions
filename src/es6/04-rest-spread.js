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

/**
 * SPREAD OPERATOR
*/

let person = {name: 'José', age: 25};
let country = {pais:'CO'};
let data = {id: 1, ...person, ...country};
console.log(data);

/**
 * REST PARAMS
*/
function sum(num, ...values){
    console.log(num);
    console.log(values);
    return num + values[0];
}

sum(1,2,3,4,5,6,7,8,9,10);
