function zipObject(array) {
    const prop = array[0];
    const value = array[1];
    const result = {};
    for (let i = 0; i < prop.length; i++) {
        result[prop[i]] = value[i]
    }

    return result;
}

const inputArray = [['a', 'b', 'c'], [1, 2]]

console.log("zipObject ->", zipObject(inputArray))