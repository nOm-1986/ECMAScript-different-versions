/**
 * Iteraciones asíncronas.
*/

async function* anotherGenerator() {
    yield await Promise.resolve('Hii 1');
    yield await Promise.resolve('Hii 2');
    yield await Promise.resolve('Hii 3');
}

const other = anotherGenerator();
//other.next().then(response => console.log(response.value));
//other.next().then(response => console.log(response.value, response.done));
// other.next().then(response => console.log(response));
// other.next().then(response => console.log(response));
// console.log('Hello down there');

/**
 * Cómo se ejecutaría si quito el async - await?
 */
function* anotherGenerator2() {
    yield  '1';
    yield  '2';
    yield  '3';
}

const other2 = anotherGenerator2();
console.log(other2.next());
console.log(other2.next());
other.next().then(response => console.log(response));
console.log(other2.next());
console.log('Hello down there');

/**
 * Otra característica en los iteradores es el uso del for
 */

async function arrayOfFruits(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfFruits(['Banana -', 'Apple -', 'Pineaple -', 'Pear -', 'Strawberry -']);
console.log('After the function async with for');
const names2 = arrayOfFruits(['Orange', 'Watermellon',]);
console.log('After names2');
const names3 = arrayOfFruits(['Fruit 1', 'Fruit 2', 'Fruit 3']);


