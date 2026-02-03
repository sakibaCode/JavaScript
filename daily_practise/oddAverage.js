function oddAverage(arr) {

    let sum = 0;
    let count = 0;

    for (let n of arr) {
        if (n % 2 !== 0) {
            sum += n;
            count++;
        }
    }

    if (count === 0) return 0;

    return sum / count;
}

console.log(oddAverage([2, 4, 1, 3, 5]));
