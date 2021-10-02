function xor(array1, array2) {
    const combineArray = [...array1, ...array2];
    
    const result = [];
    for (let i = 0; i < combineArray.length; i++) {
        if (!(array1.includes(combineArray[i]) && array2.includes(combineArray[i]))) {
            result.push(combineArray[i])
        }
    }
    return result;
}

const inputArray1 = [2, 1];
const inputArray2 = [2, 3, 5];

console.log("xor->", xor(inputArray1, inputArray2))
