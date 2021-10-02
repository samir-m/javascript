function flattenDepth(array, depth = 1) {
    if (depth > 0) {
        return array.reduce((acc, val) => {
            return acc.concat(Array.isArray(val) ? flattenDepth(val, depth - 1) : val)
        }, [])
    }
    else {
        return array.slice()
    }
}

const inputArray = [1, [2, [3, [4]], 5]];

console.log("flattenDepth -->", flattenDepth(inputArray, 1))