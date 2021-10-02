function sortedIndex(array, value) {
    // for (let i = 0; i < array.length - 1; i++) {
    //     if (value === array[i] && i !== 0) {
    //         return i - 1;
    //     }
    //     if (value === array[i] && i == 0) {
    //         return i;
    //     }
    //     if (value > array[i] && value < array[i + 1]) {
    //         return i + 1
    //     }
    // }

    let startIndex = 0;
    let endIndex = array.length - 1;
    let median = Math.floor((startIndex + endIndex) / 2);
    console.log(median, array[median])

    while (startIndex <= endIndex) {
        if (value > (array[median])) {
            startIndex = median + 1;
        }
        else {
            endIndex = median - 1
        }


        median = Math.floor((startIndex + endIndex) / 2);


    }
    return startIndex

}


const inputArray = [10, 12, 18, 20, 25, 27, 29, 30, 32, 34, 37, 41, 43, 47, 49, 50];



console.log("sortedIndex -->", sortedIndex(inputArray, 49));


