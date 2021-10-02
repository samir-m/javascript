const array=[4,7,8,4,9,7,71,8,46,41,25,14,56];

function filterArr()
{
    return array.filter(function(item){
        console.log(this)
        return item > 5
    },"Samir")
}

console.log(filterArr())