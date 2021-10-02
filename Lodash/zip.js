function zip(array) {
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

const inputArray = [['a', 'b'], [1, 2], [true, false], [5, 'a']]

console.log("zip->", zip(inputArray))