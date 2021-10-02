function sortedUniq(array) {
    const resultArray = [];

    array.forEach(element => {
        if (resultArray.indexOf(element) === -1) {
            resultArray.push(element)
        }
    });

    return resultArray;
}

const inputArray = [1, 1, 2];

console.log("sortedUniq -->", sortedUniq(inputArray));