/**
 * La versión ECMAScript 6 fue liberada en Junio de 2015
 * se lanzan let y const para arreglar el problema de scope que tiene var.
*/

const fruits = () => {
    if(true) {
        var fruit1 = 'Mango';
        let fruit2 = 'Banana';
        const fruiit3 = 'Apple';
    }
    console.warn(fruit1);
    console.warn(fruit2);
}

fruits();