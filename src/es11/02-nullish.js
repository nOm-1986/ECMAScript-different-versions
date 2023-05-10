const anotherNumber = 1;
const validate = anotherNumber ?? 5; //si este valor es null, sino es 5

const anotherTwo = null;
const validate2 = anotherTwo ?? 3;

console.log(validate);
console.log(validate2);