function pull(array, ...args) {
    return array.filter(item => !args.includes(item))
}

const inputArray = ['a', 'b', 'c', 'a', 'b', 'c'];

console.log("pull ->", pull(inputArray, 'a', 'c'))