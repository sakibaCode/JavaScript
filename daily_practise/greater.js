function countGreaterThan10(arr) {
    let count = 0;

    for (let n of arr) {
        if (n > 10) {
            count++;
        }
    }

    return count;
}

let result = countGreaterThan10([5, 12, 8, 20, 3]);
console.log(result);
