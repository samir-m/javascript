//No of char occurrences

function charOccurrences(string, char) {
    let count = 0;
    let lowerCaseString = string.toLowerCase();
    for (let i = 0; i < lowerCaseString.length; i++) {
        if (lowerCaseString[i] === char) {
            count += 1;
        }
    }
    return count
}

console.log(charOccurrences("Samwsir", 's'));


//find duplicated number

function  findDuplicate(array)
{
    let savedNumbers=[];
    let duplicateNumber=[];
    for(let i=0; i< array.length;i++)
    {
        if(savedNumbers.indexOf(array[i]) === -1)
        {
            savedNumbers.push(array[i])
        }
        else
        {   
            if(duplicateNumber.indexOf(array[i]) === -1)
            {
                duplicateNumber.push(array[i]);
            }
        }
    }
    return duplicateNumber;
}

const inputArray=[1,2,6,4,21,6,4,7,6];

console.log(findDuplicate(inputArray));


