function chunk(array, size = 1) {
    let chunkArray = [];

    for (let i = 0; i <= array.length; i = i + size) {
        let end = i + size
        chunkArray.push(array.slice(i, end));
    }

    return chunkArray;
}

const inputArray = ['a', 'b', 'c', 'd', 'e'];

console.log(chunk(inputArray, 3))