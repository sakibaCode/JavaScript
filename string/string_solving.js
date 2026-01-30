/*Count how many times a string has the letter a*/

const userName = "Sakiba";
let count = 0;

for (let i = 0; i < userName.length; i++) {
  if (userName[i] === "a") {
    count++;
  }
}

console.log(count);

/*Count how many times a string has the letter a or A*/

const aboutname = "MarufA SAkiba";
let cnt = 0;

for (let i = 0; i < aboutname.length; i++) {
  if (aboutname[i].toLowerCase() === "a") {
    cnt++;
  }
}

console.log(cnt);

/*Check whether a string contains all the vowels a, e, i, o, u*/

let str = "Dont go further away"
let vowels ="aeiou"
let found =""

for(let ch of str.toLowerCase()){

    if(vowels.includes(ch) && !found.includes(ch)){
        found+=ch
    }
}

if (found.length=== 5){
    console.log("Found all the vowels")
}
else{
    console.log(`Found ${found.length} vowels`)
}

/*If a given string has either x, replace x by y. if the given string has X, replace it by Y.*/

let strg = "xXx hello X world x";

let reslt = "";

for (let ch of strg) {
  if (ch === "x") {
    reslt += "y";
  } 
  else if (ch === "X") {
    reslt += "Y";
  } 
  else {
    reslt += ch;
  }
}

console.log(reslt);

/*Capitalize Every first Letter of each word in a String*/

let sentence ="Let life flow"
let words = sentence.split()
let result = []

for(let word of words){
   
    let captial = word[0].toUpperCase() + word.slice(1)
    result.push(captial)
}

console.log(result.join(" "))

