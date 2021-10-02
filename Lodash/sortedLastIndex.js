function sortedLastIndex(array, value) {
    let startIndex = 0;
    let endIndex = array.length - 1;
    let median = Math.floor((startIndex + endIndex) / 2);

    let lastIndex = -1;

    while (startIndex <= endIndex) {
        if (value > (array[median])) {
            startIndex = median + 1;
        }
        else if (value === array[median]) {
            startIndex = median + 1;
            lastIndex = median;
        }
        else {
            endIndex = median - 1
        }


        median = Math.floor((startIndex + endIndex) / 2);

    }
    return lastIndex

}


const inputArray = [3, 4, 4, 5, 5, 5, 9];



console.log("sortedLastIndex -->", sortedLastIndex(inputArray, 5));


