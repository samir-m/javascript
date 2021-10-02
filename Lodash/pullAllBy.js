function pullAllBy(array, values, iteratee) {
    const stack = [...array];
    function getValue(value) {
        if (typeof iteratee === 'function') {
            return iteratee(value)
        }
        if (typeof iteratee === 'string' || typeof iteratee === 'number') {
            return value[iteratee]
        }
    }

    const mapValuesArray = () => {
        return values.map(val => getValue(val))
    }

    let i = array.length;

    while (i > 0) {
        let next = array.pop();
     
        if (!mapValuesArray().includes(getValue(next))) {
            array.unshift(next)
        }
        i--;
    }

    return array.reverse();
}





const inputArray = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

// console.log("pullAllBy ->", pullAllBy(inputArray, [{ 'x': 1 }, { 'x': 3 }], 'x'))

pullAllBy(inputArray, [{ 'x': 1 }, { 'x': 3 }], 'x')

console.log(inputArray);