let variable; //? You can declare a variable with "let" keyword and use it later
// console.log(variable);  //? undefined

const variable2 = 0; //? You must declare and initialize a variable with a const keyword or else you will get an error

let num = 5;
num += 6; // num = num + 6
// console.log(num); //? 11

//                  0       1        2         3
const array = ["mango", "apple", "oranges", "banana"];

// console.log(array.slice(2));
// let splicedItems = array.splice(2);
let slicedItems = array.slice(2);
// console.log(array.splice(2));
// console.log(splicedItems);
// console.log(slicedItems);
// console.log(array);

// let javaScript = "javaScript";

// let scriptvaja = (javaScript.slice(4) + javaScript.slice(2, 4) + javaScript.slice(0, 2)).toLowerCase();

// console.log(scriptvaja); //? scriptvaja
// console.log(javaScript); //? JavaScript

//* Solving With Just Slice
// console.log(javaScript.slice(4)); //? Script
// console.log(javaScript.slice(2, 4)); //? va
// console.log(javaScript.slice(0, 2)); //? ja
// console.log(javaScript.slice(4) + javaScript.slice(2, 4) + javaScript.slice(0, 2)); //?Scriptvaja

//*Solving with Split and splice
// let splitted = javaScript.split("");
// console.log(splitted.slice(4).join("")); //? Script
// console.log(splitted.slice(2, 4).join("")); //? va
// console.log(splitted.slice(0, 2).join("")); //? ja
// console.log(splitted.slice(4).join("") + splitted.slice(2, 4).join("") + splitted.slice(0, 2).join("")); //?Scriptvaja

let javaScript = "javaScript";
console.log(javaScript.slice(-4)); //? ript
console.log(javaScript.substring(-4)); //? javaScript

//* Types of trim
//let javaScript = "     javaScript    ";
// console.log(javaScript.trim());  //? Trims both beginning and end of the string
// console.log(javaScript.trimEnd());  //? Trims the whitespace just at the end of the string
// console.log(javaScript.trimStart());  //? Trims the whitespace just at the beginning of the array.

// console.log(2 < 5 && 4 < 3 && 20 > 5);  //? False
// console.log(2 < 5 || 4 < 3 || 20 > 5);  //? True
// console.log((2 < 5 && 4 < 3) || 20 > 5);  //? True

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) {
  if (num === 5) {
    console.log(num); //? This will make 5 to be printed to the console before the loop breaks.
    break;
  } else {
    console.log(num);
  }
}
