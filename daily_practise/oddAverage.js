
function oddAverage(arr){

    let count = 0
    for(let n of arr){
        if(n%2===0){
            n+=count
        }
    }
    return count
}

console.log(oddAverage([2,4,1,3,5]))