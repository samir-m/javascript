function compact(array) {
    return array.filter((item) => {
        return Boolean(item) === true
    })
}

const inputArray = [0, 1, false, 2, '', 3];

const result = compact(inputArray)

console.log("compact -> ", result);