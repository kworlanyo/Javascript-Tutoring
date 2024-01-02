//? Arrays start with a square bracket
//? Any value can be put inside an array
//? Example
const numbers = [1, true, null, undefined, [3, 4, 5], { name: "Worla", age: 22 }];

//? Objects start with a curly bracket
//? Example
const person = {
  name: "Worla",
  age: 21,
  city: "leipzig",
  children: true,
  married: true,
};

//? Adding property to an object
person.hobbies = ["Football", "Volley"];
console.log(person);

//? Adding values to a property that has an array value
const prompt1 = "Tennis";
person.hobbies.push(prompt1);
console.log(person);

//? You can use objects to describe different values by using properties (name and value)
const describe = {
  number: 1,
  boolean: true,
  null: null,
  undefined: undefined,
  listOfNumbers: [3, 4, 5],
  personInfo: { name: "Worla", age: 22 },
};
console.log(describe);

// BONUS TASK
const applicants = [
  {
    name: "Hale Omega",
    age: 25,
    workExp: 2,
    preferredSalary: 6500,
  },
  {
    name: "Jean Gamma",
    age: 32,
    workExp: 3,
    preferredSalary: 4800,
  },
  {
    name: "Lui Alpha",
    age: 35,
    workExp: 8,
    preferredSalary: 5200,
  },
  {
    name: "Olive Beta",
    age: 35,
    workExp: 8,
    preferredSalary: 6100,
  },
];

//* First Question
// write a function that
// accepts an array as argument and
// calculates the average salary from the applicants

//? Solution
function averageSalary(array) {
  //* Using a for...of loop
  // let sum = 0;
  // for (let obj of array) {
  //   sum += obj.preferredSalary;
  // }

  // let average = sum / array.length;
  // return average;

  //* Using a for loop
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].preferredSalary;
  }
  let average = sum / array.length;
  return average;
}
console.log(averageSalary(applicants));

//* Second Question
// write a function that
// accepts an array as argument and
// returns the applicant's name whose preferredSalary is the highest

//? Solution 1
// This solution checks if the preferredSalary of each object is greater than the value in the highest value.
// After looping through the array, if we get the highest preferred salary, we then return the value of the name property.
function maxSalary2(array) {
  let highest = 0;
  let name = "";
  for (let obj of array) {
    if (obj.preferredSalary > highest) {
      highest = obj.preferredSalary;
      name = obj.name;
    }
  }
  return name;
}
console.log(maxSalary2(applicants));

//? Solution 2
// This solution first extract the preferredSalary values into array.
// We then use the Math.max method to go through the numbers in the array. We have to spread the values in the Math.max method because it works with numbers.
// We then loop through the applicants array again to find out if any of the preferredSalary values is equal to the result of the Math.max operation.
// We then return the name value that has the highest preferredSalary.
function maxSalary(array) {
  let listOfSalaries = []; //This will be the result after the first loop ===> [ 6500, 4800, 5200, 6100 ]
  for (let obj of array) {
    listOfSalaries.push(obj.preferredSalary); // for loop to get the values of each preferred salary in each object
  }

  let highestAmt = Math.max(...listOfSalaries); // 6500, 4800, 5200, 6100 ==> 6500
  for (let object of array) {
    if (object.preferredSalary === highestAmt) {
      return object.name;
    }
  }
}
console.log(maxSalary(applicants));
