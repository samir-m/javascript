function sortedIndexBy(array, value, iteratee) {
    let startIndex = 0;
    let endIndex = array.length - 1;
    let median = Math.floor((startIndex + endIndex) / 2);


    while (startIndex <= endIndex) {
        if (iteratee(value) > iteratee(array[median])) {
            startIndex = median + 1;
        }
        else {
            endIndex = median - 1
        }


        median = Math.floor((startIndex + endIndex) / 2);


    }
    return startIndex

}


const inputArray = [{ 'x': 4 }, { 'x': 6 }];



console.log("sortedIndexBy -->", sortedIndexBy(inputArray, { 'x': 5 }, function (a) { return a.x }));


