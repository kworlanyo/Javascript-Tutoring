// Declaring and initializing array
const array = []; // array is a value containing other values put in square brackets

// Declaring and initializing object
const object = {}; // object is a value containing properties (name and value) put in curly braces

// Example Array
const array1 = [1, 2, 3, 4, 5, 6, 7];
console.log(array1);

// Example Object
const object1 = {
  firstName: "Barbie", // property === name + value. That means firstName is the name of the property and "Barbie" is the value of the property.
  testScores: [68, 99, 76],
};

//!-----------------------------------------------------------------------------------------

// Rest Parameter & Spread Operator
let testScores = [77, 61, 80, 67, 90];

let highest = Math.max(...testScores); // testScores is an array, so in this case the three dots are spread operator to spread the numbers into individual values ie 77, 61, 80, 67, 90
console.log(highest); // 90

//!-----------------------------------------------------------------------------------------

function addNumbers(...num) {
  // this ...num indicates that we don't know the number of arguments to use so we are creating a one parameter to take all the arguments and put them in an array. So in effect, we will be working with an array.

  // return num.slice(3);  //[5, 6, 7]  // Because we are working with an array, we can use array methods like slice.
  return Math.max(...num); // 2,3,4,5,6,7  // Since Math.max works with numbers, we have to convert the array back to individual numbers. So using the ...num here converts the array into individual numbers.
}

console.log(addNumbers(2, 3, 4, 5, 6, 7));

//!-----------------------------------------------------------------------------------------

// Test 3
const student1 = {
  firstName: "Barbie", // property === name + value
  testScores: [68, 99, 76],
};

const student2 = {
  firstName: "Ken",
  testScores: [81, 79, 91, 89],
};

const student3 = {
  firstName: "Robert",
  testScores: [77, 61, 80, 67, 90],
};

console.log(student1);
console.log(student2);
console.log(student3);

// Test 3.1
function findHighestTestScore(obj1, obj2) {
  let obj1HighestScore = Math.max(...obj1.testScores); // obj1.testScores is an array so in order for Math.max to work with it, we have to use the spread operator on obj1.testScores to get the numbers for Math.max to work with them
  let obj2HighestScore = Math.max(...obj2.testScores); // obj2.testScores ia also an array.

  if (obj1HighestScore > obj2HighestScore) {
    return `${obj1.firstName} got the highest individual test score of ${obj1HighestScore}. ${obj2.firstName}'s highest test score was only ${obj2HighestScore}`;
  } else {
    return `${obj2.firstName} got the highest individual test score of ${obj2HighestScore}. ${obj1.firstName}'s highest test score was only ${obj1HighestScore}`;
  }
}

console.log(findHighestTestScore(student1, student2)); // Barbie got the highest individual test score of 99. Ken's highest test score was only 91
console.log(findHighestTestScore(student2, student3)); // Ken got the highest individual test score of 91. Robert's highest test score was only 90

//!-----------------------------------------------------------------------------------------

// Test 3.2
// Solution 1
function findHighestAverageTestScore(obj1, obj2) {
  // Declare and initialize variables to get the total testScores for both obj1 and obj2
  // Declare and initialize variables to get the Average scores for both obj1 and obj2
  let obj1Total = 0;
  let obj1Average = 0;

  let obj2Total = 0;
  let obj2Average = 0;

  // Write for loops to add all the values inside the testScores array of both obj1 and obj2
  for (let i = 0; i < obj1.testScores.length; i++) {
    obj1Total += obj1.testScores[i];
  }

  for (let i = 0; i < obj2.testScores.length; i++) {
    obj2Total += obj2.testScores[i];
  }

  obj1Average = obj1Total / obj1.testScores.length; // Reassign the result of the obj1Total Scores divided by the length of the totalScores array to the obj1Average variable.
  obj2Average = obj2Total / obj2.testScores.length; // Reassign the result of the obj2Total Scores divided by the length of the totalScores array to the obj2Average variable.

  // Write a conditional statement to determine what to return if the condition is true or false
  if (obj1Average > obj2Average) {
    return `Congratulations ${obj1.firstName}: you got the highest average test score of ${obj1Average}. ${obj2.firstName} got an average test score of ${obj2Average}.`;
  } else {
    return `Congratulations ${obj2.firstName}: you got the highest average test score of ${obj2Average}. ${obj1.firstName} got an average test score of ${obj1Average}.`;
  }
}

console.log(findHighestAverageTestScore(student1, student2)); // Congratulations Ken: you got the highest average test score of 85. Barbie got an average test score of 81.
console.log(findHighestAverageTestScore(student1, student3)); // Congratulations Barbie: you got the highest average test score of 81. Robert got an average test score of 75.

// Solution 2
function findHighestAverageTestScore(obj1, obj2) {
  // Declare and initialize variables to get the Average scores for both obj1 and obj2
  let obj1Average = 0;
  let obj2Average = 0;

  // Write for loops to add all the values inside the testScores array of both obj1 and obj2 and alo calculate the average as the loop is running nad save the result in both obj1Average and obj2Average.
  for (let i = 0; i < obj1.testScores.length; i++) {
    obj1Average += obj1.testScores[i] / obj1.testScores.length;
  }

  for (let i = 0; i < obj2.testScores.length; i++) {
    obj2Average += obj2.testScores[i] / obj2.testScores.length;
  }

  // Write a conditional statement to determine what to return if the condition is true or false
  if (obj1Average > obj2Average) {
    return `Congratulations ${obj1.firstName}: you got the highest average test score of ${obj1Average}. ${obj2.firstName} got an average test score of ${obj2Average}.`;
  } else {
    return `Congratulations ${obj2.firstName}: you got the highest average test score of ${obj2Average}. ${obj1.firstName} got an average test score of ${obj1Average}.`;
  }
}

console.log(findHighestAverageTestScore(student1, student2)); // Congratulations Ken: you got the highest average test score of 85. Barbie got an average test score of 81.
console.log(findHighestAverageTestScore(student1, student3)); // Congratulations Barbie: you got the highest average test score of 81. Robert got an average test score of 75.
