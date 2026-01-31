/*Task-1
Take four parameters. Multiply the four numbers and then return the result */

function multiplication(a,b,c,d){
    return a*b*c*d;
}

let result = multiplication(1,2,3,4)
console.log(result)

/*Task-2
Take a number if the number is odd multiply it by 2 and return the result. 
If the number is even divide it by two and return the result. */

function processNumber(n){

    if(n%2===0){
        return n*2;
    }
    else{
        return n/2;
 
    }
}

let outcome = processNumber(5)
console.log(outcome)

/*Task-3
Write a function called make_avg() which will take an array of integers and 
the size of that array and return the average of those values.*/

function average(arr){

    let sum=0;

    for(let m of arr){
        sum+=m
    }
    return sum
}

let answer = average([1,2,3,4,5])
console.log(answer)

/*Task-4
Write a function called count_zero() which will take a binary string 
(Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are 
there in that string. */

function countZero(num) {
    let count = 0;

    for (let z of num) {
        if (z === '0') {
            count++;
        }
    }

    return count;
}

let solution = countZero("01011001")
console.log(solution)

/*Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. 
If even return Even. If odd return Odd */

function odd_even(y) {
    if (y % 2 === 0) {
        return "Even";
    } 
    else {
        return "Odd";
    }
}

let product = odd_even(5);
console.log(product);

