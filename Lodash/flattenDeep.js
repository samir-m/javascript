function flattenDeep(array) {
    let stack = [...array];
    const result = [];

    while (stack.length) {
        let next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next)
        }
        else {
            result.push(next)
        }
    }

    return result.reverse();
}

const inputArray = [1, [2, [3, [4]], 5]];

const result = flattenDeep(inputArray);

console.log("flattenDeep -->", result);