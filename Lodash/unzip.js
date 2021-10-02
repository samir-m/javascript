function unzip(array) {
    const row = array.length;
    const column = array[0].length;
    const result = [];
    for (let i = 0; i < column; i++) {
        let arr = []
        for (let j = 0; j < row; j++) {
            arr.push(array[j][i])
        }
        result.push(arr);
        arr = []
    }
    return result;
}

const inputArray = [['a', 1, true, 5], ['b', 2, false, 'a']]

console.log("unzip->", unzip(inputArray))