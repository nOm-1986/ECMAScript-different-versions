/**
 * Promise
 * Recordemos el concepto de promesa: algo que va a pasar o pueda que no =D.
 */

const anotherFunction = () => {
    //Callback - Funcion que recibe otra funcion y la ejecuta.
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!!, funciona weritooo!!');
        } else {
            reject('Whooooops - Lo mando al catch');
        }
    });
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Se ejecuta si o si') );