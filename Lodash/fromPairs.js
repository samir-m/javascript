function fromPairs(array) {
    return array.reduce((acc, val) => {
        return { ...acc, [val[0]]: val[1] }
    }, {})
}

const inputArray = [['a', 1], ['b', 2], ['c']];

console.log("fromPairs ->", fromPairs(inputArray))