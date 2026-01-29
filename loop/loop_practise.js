/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

let i = 1

while(i<=20){
    
    console.log(i)
    if(i==10)
        break;
    i++;
    
}

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let n = 1;
let sum = 0;

while (sum < 100) {
    sum += n;
    n++;
}

console.log(sum);

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let m = 1;
let o = 2;

while (m <= 10) {

    if(m=== o*o){
        console.log(m)
        break;
    }
    m++;
   
}

/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

let p = 1;

while (p <= 40) {

    if (p % 2 !== 0) {   
        p++;
        continue;
    }

    console.log(p);     
    p++;
}

/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

let q= 5;

while(q<=85){

    if(q%2 === 0){
        q++;
        continue;
    }

    console.log(q);
    q++;
}

/*
Generate a multiplication table for number 9
*/

let r=9;


for(i=1;i<=10;i++){
    let multiplication= r*i;
    console.log(multiplication)
}
