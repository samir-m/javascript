function pulledAt(array, indices) {
    let stack = [...array];
    const result = [];
    let i = 0;
    while (i < stack.length) {
        const next = array.shift();
        if (indices.includes(i)) {
            result.push(stack[i])
        }
        else {
            array.push(next)
        }
        i++;
    }
    return result;
}

const inputArray = ['a', 'b', 'c', 'd'];

var pulled = pulledAt(inputArray, [1, 3]);

console.log(inputArray);

console.log(pulled);