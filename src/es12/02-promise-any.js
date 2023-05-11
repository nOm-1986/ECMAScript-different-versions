const promise1 = new Promise((res, rej) => {
    if(false) res('Resolved 1');
    else rej('Rejected 1');
});

const promise2 = new Promise((resolve, reject) => {
    if(false) resolve('Resolve 2');
    else reject('Rejected 2');
});

const promise3 = new Promise((resolve, reject) => {
    if(false) resolve('Resolve 3');
    else reject('Rejected 3');
});
/**
 * Va a capturar la respuesta de la primera que sea satisfactoria.
 */
Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });

