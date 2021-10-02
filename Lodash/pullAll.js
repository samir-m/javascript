function pullAll(array, values) {
    array = array.filter(item => !values.includes(item));
    return array
}

const inputArray = ['a', 'b', 'c', 'a', 'b', 'c'];

console.log("pullAll ->", pullAll(inputArray, ['a', 'c']))