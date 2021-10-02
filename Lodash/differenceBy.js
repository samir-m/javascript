function differenceBy(array, values, iteratee = '') {
    const testIteratee = (value) => {
        if (iteratee && typeof iteratee === 'function') {
            return iteratee(value)
        }
        if (iteratee && (typeof iteratee === 'string' || typeof iteratee === 'number')) {
            return value[iteratee]
        }
        return value;
    }
    const mapValuesArray = () => {
        return values.map(val => testIteratee(val))
    }

    return array.filter(item => !mapValuesArray().includes(testIteratee(item)))

}

const arr1 = [{ 'x': 2 }, { 'x': 1 }];
const arr2 = [{ 'x': 1 }]

const result = differenceBy(arr1, arr2, 'x');

console.log("differenceArray -> ", result);


