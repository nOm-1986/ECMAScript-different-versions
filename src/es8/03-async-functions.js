/**
 * Using async and await
 */
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello,down there!!'), 4000)
        : reject(new Error('Ocurrió un error'));
    });
}
/**
 * Esta funcion es la que va a utilizar las palabras reservadas async y await para ejecutar la promesa
 * 
 * De esta forma se logra ejecutar la función 
 * 
 * Recuerda que se deben ejecutar bloques de código consecuentes pero que no deben ser bloqueantes.
 * Eso significa que el siguiente bloque de código debe ser ejecutado sin ningun problema independientemente
 * de lo que vaya a responder la promesa.
 */
const anotherFun =  async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Promise respondió');
}

console.log('Before');
anotherFun();
console.log('After');

/**
 * Si quitamos las palabras reservadas
 * Before
 * Promise { <pending> }
 * Promise respondió
 * After
 */