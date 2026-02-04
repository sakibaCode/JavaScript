function removeDuplicate(arr){

    // const newArray = [];

    // for(let n of arr){
    //     if(!newArray.includes(n)){
    //         newArray.push(n)
    //     }
    // }
    // return newArray

    return[... new Set(arr)]
}

console.log(removeDuplicate([1,2,3,4,2,1,5]))