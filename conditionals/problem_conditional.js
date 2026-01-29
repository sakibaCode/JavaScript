/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 22;
let isStudent = true;
let ticketPrice = 800;

if (age < 0) {
    console.log("Invalid age");
}
else if (age < 10) {
    console.log("Ticket is free");
}
else if (isStudent) {
    console.log("Ticket price:", ticketPrice * 0.5, "tk");
}
else if (age >= 60) {
    console.log("Ticket price:", ticketPrice * 0.85, "tk");
}
else {
    console.log("Ticket price:", ticketPrice, "tk");
}


/***
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 
also, write it using ternary operator.
*/

let num1 = 10;
let num2 = 20;
let result;

if (num1 > num2) {
    result = num1 * 2;
} else {
    result = num1 + num2;
}

console.log(result);

// ternary operator
let num = 10;
let numtwo = 20;

let resultwo = num > numtwo ? num * 2 : num + numtwo;

console.log(resultwo);

/***
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myScore = 85;
let friendScore = 55;

if (myScore > 80) {

    if (friendScore > 80) {
        console.log("Go for a lunch");
    } 
    else if (friendScore >= 60) {
        console.log("Good luck next time");
    } 
    else if (friendScore >= 40) {
        console.log("Message unseen");
    } 
    else {
        console.log("Block your friend");
    }

} else {
    console.log("Go home, sleep, and act sad");
}

/***
Grade Calculator
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/
const marks = 78;
let grade;

if (marks < 0 || marks > 100) {
    grade = "Invalid marks";
} else {
    switch (true) {
        case marks >= 90:
            grade = "A";
            break;
        case marks >= 80:
            grade = "B";
            break;
        case marks >= 70:
            grade = "C";
            break;
        case marks >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
    }
}

console.log("Result is:", grade);


/*** 
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/

let weight = 50;   
let height = 1.7; 

if (weight <= 0 || height <= 0) {
    console.log("Invalid input");
} else {
    let bmi = weight / (height * height);

    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (bmi < 25) {
        console.log("Normal");
    } else if (bmi < 30) {
        console.log("Overweight");
    } else {
        console.log("Obese");
    }
}


/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 600;

let cokePrice = burgerPrice > 500 ? "Free" : "30tk";
console.log("Coke:", cokePrice);
