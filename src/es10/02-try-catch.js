try {
    hello();
    
} catch (error) {
    console.log(error);
}
// Me arroja el error de hello: ReferenceError: hello is not defined


//No es necesario pasar el error.
try {
    anotherFun();
} catch {
    console.log('Lanzo mi error personalizado');
}
//Al ejecutar aparecera esto en vez de decir que anotherFn() es undefined
// Lanzo mi error personalizado