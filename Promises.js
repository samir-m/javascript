function sumPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (a && b) {
            resolve(a + b)
        }
        else {
            reject("Insuffiecient Input");
        }
    })
}


sumPromise(45, 71).then(result => console.log(result));

sumPromise(45).then(result => console.log(result)).catch(err => console.log(err));


const getData=()=>{
    return fetch('https://jsonplaceholder.typicode.com/todos/1').then(resposne=> resposne.json)
}

getData();