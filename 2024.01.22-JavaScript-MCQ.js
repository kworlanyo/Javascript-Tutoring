const questions = [
  {
    question: "How do you dynamically add a property to an object?",
    choices: [
      "object.newProperty = value;",
      "addProperty(object, 'newProperty', value);",
      `object.addProperty("newProperty", value);`,
      `setProperty(object, "newProperty", value);`,
    ],
    correctAnswer: "object.newProperty = value;",
  },
  {
    question: "What is the alternative way to test if a property exists in an object?",
    choices: ["object.exists(property);", "property in object;", "object.hasProperty(property);", "object in property;"],
    correctAnswer: "property in object;",
  },
  {
    question: "What is a property in the context of an object?",
    choices: ["A data type.", "A function.", "A key-value pair.", "An array element."],
    correctAnswer: "A key-value pair.",
  },
  {
    question: "How is an object created using the object literal notation?",
    choices: ["const obj = new Object();", "const obj = {}", "const obj = Object.create({});", "const obj = Object();"],
    correctAnswer: "const obj = {}",
  },
  {
    question: "What is the purpose of the 'new' keyword in the context of object creation?",
    choices: ["Initialize a new object.", "Create a new property.", "Log to the console.", "Delete a property."],
    correctAnswer: "Initialize a new object.",
  },
  {
    question: "What is the purpose of methods in JavaScript objects?",
    choices: [
      "Display information in the console.",
      "Perform actions or computations based on object properties.",
      "Define object properties.",
      "Create objects.",
    ],
    correctAnswer: "Perform actions or computations based on object properties.",
  },
  {
    question: "How can a method be added to an object using basic syntax?",
    choices: [
      "Define a function separately and link it to the object.",
      "Use the 'createMethod' keyword.",
      "Define a function as a property of the object.",
      "Use the method() syntax.",
    ],
    correctAnswer: "Define a function as a property of the object.",
  },
  {
    question: "What should you be cautious about when using arrow functions as methods?",
    choices: [
      "They are not supported in ES6.",
      "They do not inherit the 'this' context.",
      "They cannot access object properties.",
      "They lead to memory leaks.",
    ],
    correctAnswer: "They do not inherit the 'this' context.",
  },
  {
    question: "When using arrow functions as methods, what does 'this' refer to?",
    choices: ["The global object", "The arrow function itself.", "The surrounding scope.", "The current object"],
    correctAnswer: "The surrounding scope.",
  },
  {
    question: "In the global scope, what does 'this' refer to?",
    choices: ["The global object", "The arrow function itself.", "The surrounding scope.", "The current object"],
    correctAnswer: "The global object",
  },
  {
    question: "What does 'this' inside a regular function in the global context refer to?",
    choices: ["The global object", "The arrow function itself.", "The surrounding scope.", "The current object"],
    correctAnswer: "The global object",
  },
  {
    question: "When a function is a method of an object, what does 'this' refer to inside the function?",
    choices: ["The global object", "The arrow function itself.", "The surrounding scope.", "The object the method was called on."],
    correctAnswer: "The object the method was called on.",
  },
  {
    question: "How can you destructure parameters directly in the method signature?",
    choices: [
      "Using arrow functions.",
      "Using the 'bind' method.",
      "By assigning 'this' to a variable.",
      "Directly in the method signature using 'this'.",
    ],
    correctAnswer: "Directly in the method signature using 'this'.",
  },
  {
    question: "What is the purpose of using quotes around the property name in bracket notation?",
    choices: ["To prevent syntax errors.", "To indicate a string property.", "To define a new property.", "To specify a numeric property."],
    correctAnswer: "To prevent syntax errors.",
  },
  {
    question: "What does Object.keys() return?",
    choices: ["Array of property values.", "Array of property names.", "Array of key-value pairs.", "Object with enumerated properties."],
    correctAnswer: "Array of property names.",
  },
  {
    question: "What is the purpose of the 'for...in' loop when iterating over object properties?",
    choices: [
      "Iterates over array elements.",
      "Iterates over object values.",
      "Iterates over enumerable object properties.",
      "Iterates over prototype chain properties.",
    ],
    correctAnswer: "Iterates over enumerable object properties.",
  },
  {
    question: "What does the 'in' operator do in JavaScript?",
    choices: [
      "Checks if a property exists in an object or its prototype chain.",
      "Assigns a value to a property.",
      "Creates a new property in an object.",
      "Checks if a property is undefined.",
    ],
    correctAnswer: "Checks if a property exists in an object or its prototype chain.",
  },
  {
    question: "What is the purpose of destructuring assignment in JavaScript?",
    choices: [
      "To create new variables from arrays or object properties.",
      "To concatenate arrays and objects.",
      "To loop through arrays.",
      "To declare variables with default values.",
    ],
    correctAnswer: "To create new variables from arrays or object properties.",
  },
  {
    question: "Why is the term 'shallow copy' used when creating a copy of an object using the spread operator?",
    choices: [
      "The copy is not an exact replica of the original object.",
      "Only the top-level properties are copied, not the values of nested objects.",
      "The copied object is stored in a shallow part of the memory.",
      "The copying process is quick and shallow.",
    ],
    correctAnswer: "Only the top-level properties are copied, not the values of nested objects.",
  },
  {
    question: "Which method is used to create a shallow copy of an object in JavaScript?",
    choices: ["Object.copy()", "Object.clone()", "Object.assign()", "Object.shallowCopy()"],
    correctAnswer: "Object.assign()",
  },
  {
    question: "What happens when you change a property of an object parameter inside a function that was passed as an argument?",
    choices: [
      "The change only affects the parameter inside the function.",
      "The change affects the original object outside the function.",
      "The parameter becomes undefined.",
      "The function throws an error.",
    ],
    correctAnswer: "The change affects the original object outside the function.",
  },
  {
    question: "How does the Object.assign() method create a copy of an object?",
    choices: [
      "It directly references the original object.",
      "It creates a new object and copies all properties and values.",
      "It creates a reference to the original object's memory location.",
      "It uses the prototype chain to replicate the object.",
    ],
    correctAnswer: "It creates a new object and copies all properties and values.",
  },
  {
    question: "What is a 'deep clone' in the context of object copying?",
    choices: [
      "A clone that is created deeply nested in the memory.",
      "A copy that includes only the top-level properties of an object.",
      "An exact replica of the original object, including nested objects.",
      "A clone that is stored in the deep part of the memory.",
    ],
    correctAnswer: "An exact replica of the original object, including nested objects.",
  },
  {
    question: "What is a potential issue when using the structuredClone function for deep copying objects?",
    choices: [
      "It is slower than other deep copying methods.",
      "It cannot handle object methods.",
      "It only copies primitive values, not objects.",
      "It causes the original object to become undefined.",
    ],
    correctAnswer: "It cannot handle object methods.",
  },
  {
    question: "Which term is used to describe a function that accepts another function as an argument?",
    choices: ["Callback function", "Higher order function", "Arrow function", "Recursive function"],
    correctAnswer: "Higher order function",
  },
  {
    question: "How is the 'map' method generally used?",
    choices: [
      "To iterate over an array and perform a transformation on each element.",
      "To check if a specific element exists in an array.",
      "To remove elements from an array based on a condition.",
      "To find the index of a specific element in an array.",
    ],
    correctAnswer: "To iterate over an array and perform a transformation on each element.",
  },
  {
    question: "What is the key characteristic of the 'find' method?",
    choices: [
      "It returns an array of matching elements.",
      "It filters based on a specific condition.",
      "It returns the first matching element, not in an array.",
      "It works on deep copies of arrays.",
    ],
    correctAnswer: "It returns the first matching element, not in an array.",
  },
  {
    question: "What is the primary purpose of the 'reduce' method?",
    choices: [
      "To create a new array with modified elements.",
      "To iterate over an array and reduce its size.",
      "To build and return a single value from the original array.",
      "To filter elements based on a specific condition.",
    ],
    correctAnswer: "To build and return a single value from the original array.",
  },
  {
    question: "What does the 'accumulator' represent in the context of the 'reduce' method?",
    choices: [
      "A value updated after each iteration and returned once all iterations are complete.",
      "A placeholder for the current element from the original array.",
      "The original array being reduced.",
      "The index of the current element in the original array.",
    ],
    correctAnswer: "A value updated after each iteration and returned once all iterations are complete.",
  },
  {
    question: "How does the 'reduce' method handle iterations without an initialValue?",
    choices: [
      "It throws an error.",
      "It uses the first element of the array as the initialValue.",
      "It skips the first iteration.",
      "It defaults the initialValue to an empty string.",
    ],
    correctAnswer: "It uses the first element of the array as the initialValue.",
  },
  {
    question: "What does the 'forEach' method do?",
    choices: [
      "It filters elements based on a specific condition.",
      "It executes a callback once for each element in an array.",
      "It reduces an array to a single value.",
      "It creates a new array with modified elements.",
    ],
    correctAnswer: "It executes a callback once for each element in an array.",
  },
  {
    question: "What does the 'forEach' method always return?",
    choices: ["An array of modified elements.", "The result of a callback function.", "Undefined.", "A boolean indicating success or failure."],
    correctAnswer: "Undefined.",
  },
  {
    question: "How does 'sort' method differ from 'filter' and 'map' methods?",
    choices: [
      "It returns a new array with modified elements.",
      "It does not mutate the original array.",
      "It is chainable with other array methods.",
      "It mutates the original array.",
    ],
    correctAnswer: "It mutates the original array.",
  },
  {
    question: "Why is it recommended to make a copy of an array before using the 'sort' method?",
    choices: [
      "To avoid changing the original array.",
      "To ensure the array is sorted in descending order.",
      "To reduce the execution time of the sorting process.",
      "To prevent 'sort' from mutating other arrays.",
    ],
    correctAnswer: "To avoid changing the original array.",
  },
  {
    question: "What is the purpose of a constructor function in JavaScript?",
    choices: [
      "To create a new type of primitive value.",
      "To define a template for creating objects with the same structure.",
      "To handle asynchronous operations in code.",
      "To modify the properties of existing objects.",
    ],
    correctAnswer: "To define a template for creating objects with the same structure.",
  },
  {
    question: "How should constructor function names be conventionally formatted?",
    choices: ["In all lowercase letters.", "With the first letter capitalized.", "With camelCase formatting.", "Prefixed with the 'new' keyword."],
    correctAnswer: "With the first letter capitalized.",
  },
  {
    question: "What must be used when invoking a constructor function to create an object?",
    choices: ["An explicit 'return' statement.", "The 'const' keyword.", "The 'prototype' keyword.", "The 'new' operator."],
    correctAnswer: "The 'new' operator.",
  },
  {
    question: "What is the significance of starting constructor function names with an uppercase letter?",
    choices: [
      "It is required by the JavaScript engine for correct execution.",
      "It is a common convention to distinguish constructor functions from regular functions.",
      "It ensures the 'new' operator is not needed.",
      "It allows the function to return a value.",
    ],
    correctAnswer: "It is a common convention to distinguish constructor functions from regular functions.",
  },
  {
    question: "What does the 'new' operator do when used with a constructor function?",
    choices: [
      "It creates an empty object, assigns properties, and returns the object.",
      "It creates a primitive value based on the constructor function.",
      "It deletes the existing object and replaces it with a new one.",
      "It prevents the execution of the constructor function.",
    ],
    correctAnswer: "It creates an empty object, assigns properties, and returns the object.",
  },
  {
    question: "What is the purpose of a class in JavaScript?",
    choices: [
      "To create a new type of primitive value.",
      "To define a template for creating objects with the same structure.",
      "To handle asynchronous operations in code.",
      "To modify the properties of existing objects.",
    ],
    correctAnswer: "To define a template for creating objects with the same structure.",
  },
  {
    question: "What is the technical term for creating an instance of a class?",
    choices: ["Instantiation", "Declaration", "Definition", "Execution"],
    correctAnswer: "Instantiation",
  },
  {
    question: "What properties are automatically assigned when creating a new instance of a class?",
    choices: [
      "Properties specified in the class definition.",
      "Properties with random values.",
      "An empty object.",
      "Default properties provided by the JavaScript engine.",
    ],
    correctAnswer: "Properties specified in the class definition.",
  },
  {
    question: "Why might it be important to provide default values in the constructor method?",
    choices: [
      "To confuse developers reading the code.",
      "To prevent the creation of instances with missing properties.",
      "To make the code less efficient.",
      "To override the default values specified in the class definition.",
    ],
    correctAnswer: "To prevent the creation of instances with missing properties.",
  },
  {
    question: "How does defining a method outside the constructor impact memory usage?",
    choices: [
      "It increases memory usage for each instance.",
      "It decreases memory usage for each instance.",
      "It has no impact on memory usage.",
      "It depends on the size of the method.",
    ],
    correctAnswer: "It decreases memory usage for each instance.",
  },
  {
    question: "How are subclasses related to classes in JavaScript?",
    choices: [
      "Subclasses are unrelated to classes.",
      "Subclasses inherit properties and methods from classes.",
      "Classes inherit properties and methods from subclasses.",
      "Classes and subclasses have no relationship in JavaScript.",
    ],
    correctAnswer: "Subclasses inherit properties and methods from classes.",
  },
  {
    question: "Can a subclass have its own properties and methods in addition to those inherited?",
    choices: [
      "No, a subclass cannot have additional properties or methods.",
      "Yes, a subclass can only have additional properties, not methods.",
      "Yes, a subclass can have both additional properties and methods.",
      "It depends on the complexity of the parent class.",
    ],
    correctAnswer: "Yes, a subclass can have both additional properties and methods.",
  },
  {
    question: "What is the significance of the 'super' keyword in a subclass?",
    choices: [
      "It refers to the global object.",
      "It invokes the parent class's constructor method.",
      "It creates a new instance of the subclass.",
      "It provides access to the subclass's private methods.",
    ],
    correctAnswer: "It invokes the parent class's constructor method.",
  },
  {
    question: "Why would you use subclasses in JavaScript?",
    choices: [
      "To confuse the code structure.",
      "To reduce code complexity and redundancy.",
      "To prevent the use of methods.",
      "To limit the number of instances created.",
    ],
    correctAnswer: "To reduce code complexity and redundancy.",
  },
  {
    question: "What is the purpose of class inheritance in JavaScript?",
    choices: [
      "To create unrelated classes.",
      "To destroy existing classes.",
      "To extend functionality from a parent class to a child class.",
      "To limit the usage of properties and methods.",
    ],
    correctAnswer: "To extend functionality from a parent class to a child class.",
  },
  {
    question: "In a class hierarchy, what does a child class inherit from a parent class?",
    choices: ["Only properties.", "Only methods.", "Both properties and methods.", "Neither properties nor methods."],
    correctAnswer: "Both properties and methods.",
  },
  {
    question: "How can you make a property private in a JavaScript class?",
    choices: [
      "By using the 'hidden' keyword.",
      "By adding an underscore before the property name.",
      "By prefixing the property name with a pound (#) symbol.",
      "By placing the property in a separate private object.",
    ],
    correctAnswer: "By prefixing the property name with a pound (#) symbol.",
  },
  {
    question: "What happens if you try to access a private property from outside its class?",
    choices: ["It throws an error.", "It returns undefined.", "It exposes the property directly.", "It modifies the private property."],
    correctAnswer: "It returns undefined.",
  },
  {
    question: "The following are the purposes of the Object.seal() method except",
    choices: ["To prevent adding new properties.", "To prevent modifying existing properties.", "To prevent deleting existing properties."],
    correctAnswer: "To prevent modifying existing properties.",
  },
];

console.clear();

console.log(questions.length);

const rs = require("readline-sync"); //! Install readline-sync to make it work.

questions.map((obj, index) => {
  console.log(`Q${index + 1}. ${obj.question}\n`);

  // entries() return an array of nested arrays of key value pairs. In this case, it returns the index and the value at the index together in one array for each value. So we can destructure them in the for...of loop and use them
  // entries() is different from Object.entries()
  for (let [ansIndex, option] of obj.choices.entries()) {
    console.log(`${ansIndex + 1}. ${option}`);
  }

  let input = +rs.question("\nEnter the number of the correct answer: \n> ");

  if (input - 1 === obj.choices.indexOf(obj.correctAnswer)) {
    console.log("\nCorrect Answer ✅\n");
    console.log("\n");
  } else {
    console.log(`\nWrong answer ❌. The answer is ▶ ${obj.correctAnswer}\n`);
    console.log("\n");
  }
});
