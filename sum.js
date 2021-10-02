const numArray=[1,5,8,7,9,3,7,54,7,48,4,575,75,4,5,78,4822];



// const calculateSumByForLoop = () =>{
//     let sum=0;
//     for(let i=0;i<numArray.length;i++)
//     {
//         sum=sum + numArray[i]
//     }
//     return sum;
// }
// console.log(Date.now());
// console.log(calculateSumByForLoop());
// console.log(Date.now());

const calculateSumByReduce=()=>{
    const sum= numArray.reduce((acc,curr)=>{
        return  acc +  curr
    },0);
    return sum;
}


console.log(Date.now());
console.log(calculateSumByReduce());

console.log(Date.now());