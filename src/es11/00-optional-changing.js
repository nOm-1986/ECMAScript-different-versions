/**
 * Optional chaining.
 * Podemos tener un objeto que tiene por dentro llave y valor, sin embargo ese objeto puede que no traiga en algún punto ese valor.
 * Esto nos permite validar y no romper el flujo de nuestro programa.
*/

const users = {
    fabo: {
        country: 'CO',
        age: 36,
        hoobies: ['Reading', 'Running', 'Tennis','Spend time with Majo']
    },
    karen: {
        country: 'CO'
    }
}

/**
 * Imaginemos que voy a recorrer el objeto buscando un usuario oscar.age .
 * Esto hace que se rompa nuestro programa.
*/
console.log(users.oscar.age);

//Optional Changing -- Me regresará undefined
console.log(users?.karen?.age);
