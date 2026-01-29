/*
1.Declare an array

Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
*/


fruits =['apple','lichi','banana','goava','jackfruit']

let third = fruits[2]

console.log(third)

/*
2. Add or remove elements

Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/

spot = ["Sylhet","Bandarban","Rajshahi"]

spot.push("Coxs Bazar")

spot.push("Saintmartin","Barisal")

spot.pop()

console.log(spot)

/*
3. Checking Array Membership with ‘includes’

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/

let books = [
  "Atomic Habits",
  "Deep Work",
  "Clean Code",
  "JavaScript: The Good Parts",
];
if (books.includes("JavaScript: The Good Parts")) {
  console.log("Yes, the array contains a JavaScript book.");
} 
else {
  console.log("No, the array does not contain a JavaScript book.");
}

/*
4. Checking if it's an Array

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/


let a = [1, 2, 3];
let b = "Hello";
let c = { name: "Sakiba" };
let d = 42;
let e = ["JS", "Python"];

console.log("a is array:", Array.isArray(a));
console.log("b is array:", Array.isArray(b));
console.log("c is array:", Array.isArray(c));
console.log("d is array:", Array.isArray(d));
console.log("e is array:", Array.isArray(e));

/*
5. Combining Arrays

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().

*/

let fruit = ["Apple", "Banana", "Mango"];
let vegetables = ["Carrot", "Potato", "Tomato"];

let combinedArray = fruit.concat(vegetables);

console.log("Fruits:", fruit);
console.log("Vegetables:", vegetables);


console.log("Combined Array:", combinedArray);
