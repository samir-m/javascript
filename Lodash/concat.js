function concat(array, ...args) {
    let concatArray = [...array];
    for (let i = 0; i < args.length; i++) {
        if (Array.isArray(args[i])) {
            concatArray.push(...args[i])
        }
        else {
            concatArray.push(args[i])
        }
    }
    return concatArray;
}

const inputArray = [0, 1, 2];

const result = concat(inputArray, 4, [5], [[6]]);

console.log("concat -> ", result);