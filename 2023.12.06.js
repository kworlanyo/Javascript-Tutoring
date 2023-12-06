let readlineSync = require("readline-sync");

// Scenario: You are implementing a traffic light system, and you want to control the flow of traffic.
// Question: Use a switch statement to determine the action based on the current color of the traffic light.
let trafficLightColor = "Blue";
let action;

switch (trafficLightColor) {
  case "Red": //? The case statement always need a colon(:) at the end of the statement. Colon is different from a semi-colon(;)
    action = "Stop";
    break; //? The break statement is needed to end the code for that case.
  case "Yellow":
    action = "Prepare to stop";
    break;
  case "Green":
    action = "You can go";
    break;
  default: //? the default is like the "else" of the if statement.
    action = "Invalid Color";
}

console.log(action);

// ! --------------------------------------------------------------------------------------------

// Create a grading System for a school.
let numericalGrade = readlineSync.question(`Enter your numerical grade here: `);

switch (
  true //? You can use the true boolean value as a condition to check the cases in the switch statement
) {
  case numericalGrade >= 90 && numericalGrade <= 100:
    console.log("Your grade is A");
    break;
  case numericalGrade >= 80 && numericalGrade <= 89:
    console.log("Your grade is B");
    break;
  case numericalGrade >= 60 && numericalGrade <= 79:
    console.log("Your grade is C");
    break;
  case numericalGrade >= 0 && numericalGrade <= 59:
    console.log("You have failed");
    break;
  default:
    console.log("Enter a valid number from 0 to 100");
}

//! ----------------------------------------------------------------------------------

let sentence = "This is a sentence";
let char = sentence[3];
// let char = sentence.charAt(3);  //? charAt is a string method to check the value at an index. It give the same value as code on line 50
console.log(char);

//! ----------------------------------------------------------------------------------
// Exercise: Generate username from email address using a function
// eg. if the email is worlanyo@gmail.com, the username should be worlanyo
// eg. if the email is tomi@gmail.com, the username should be tomi
function name(email) {
  let username = email.slice(0, email.indexOf("@")); //? email.indexOf("@") will produce a numerical value which will make the slicing complete.
  return username;
}

console.log(name("zhanna.cha@gmail.com"));

//! ------------------------------------------------------------------------------
// Scenario: You have recorded daily temperatures, and you need to filter out temperatures above a certain threshold.
// Question: Remove temperatures above 30 degrees Celsius from the temperatureRecords array.
const temperatureRecords = [28, 31, 25, 32, 29, 30];

for (let i = 0; i < temperatureRecords.length; i++) {
  if (temperatureRecords[i] > 30) {
    temperatureRecords.splice(i, 1); //? splice (index, number of items to remove, item to add). pop() removes from the end, shift() removes from the beginning, splice removes anywhere.
  }
}

console.log(temperatureRecords);

//? push() will add to the end of the array
//? pop() will remove from the end of the array

//? unshift() will add to the beginning to the array
//? shift() will remove from the beginning

//? splice() can remove anywhere
