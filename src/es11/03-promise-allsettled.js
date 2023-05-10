const promise1 = new Promise((res, rej) => {
    if(false) res('Resolved 1');
    else rej('Rejected 1');
});

const promise2 = new Promise((resolve, reject) => {
    if(true) resolve('Resolve 2');
    else reject('Rejected 2');
});

const promise3 = new Promise((resolve, reject) => {
    if(true) resolve('Resolve 3');
    else reject('Rejected 3');
});

/**
*   [
        { status: 'rejected', reason: 'Rejected 1' },
        { status: 'fulfilled', value: 'Resolve 2' },
        { status: 'fulfilled', value: 'Resolve 3' }
    ]
*/
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));
