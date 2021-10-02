function remove(array, fn) {
    let result = [];
    const stack = [...array];


    for (let i = 0; i < stack.length; i++) {
        array.pop();
        if (fn(stack[i]) === true) {
            result.push(stack[i])
        }
        else {
            array.unshift(stack[i])
        }
    }
    array.reverse();
    return result;
}

const inputArray = [1, 2, 3, 4];

console.log("remove ->", remove(inputArray, function (i) { return i % 2 === 0 }))

console.log("inputArray", inputArray)