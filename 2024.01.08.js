const products = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  },
  {
    type: "shirt",
    price: 32,
    color: "white",
  },
  {
    type: "jacket",
    price: 25,
    color: "grey",
  },
  {
    type: "shorts",
    price: 19,
    color: "yellow",
  },
  {
    type: "skirt",
    price: 18,
    color: "brown",
  },
  {
    type: "t-shirt",
    price: 5,
    color: "red",
  },
  {
    type: "jeans",
    price: 29,
    color: "black",
  },
];

const products2 = [...products];
// const products2 = Object.assign({}, products);

console.log(products2);

const anotherProduct = {
  type: "shoe",
  price: 40,
  color: "blue",
};
products2.push(anotherProduct);
// In this case, because we are just pushing another object into the products2 array, the pushing will only affect the products2 array and not the original array (products array) due to the shallow copying. But when we start to manipulate the individual objects in the products2 array, then the original array (products array) will also be affected because the shallow copying is just on the first level. That is why we need to use the solutions we discussed today during the class to make the copying work on more than one level.
console.log(products2);
console.log("------------------------------------------------------");
console.log(products);

//* Ways of Copying Arrays
const arr = ["Bird", "Lion", "Dog", "Cat", "Chicken"];
const arr2 = [...arr]; // This is using the spread syntax to copy an array
const arr3 = Object.assign([], arr); // This is using the Object.assign() method to copy an array. //? Remember that an array is also an object that is why object.assign works on arrays as well.

console.log(arr2);
console.log(arr3);

//* Ways of Copying Objects
const originalObj = {
  name: "Worla",
  city: "Leipzig",
};
const obj2 = { ...originalObj }; // This is using the spread syntax to copy an object
const obj = Object.assign({}, originalObj); // This is using the Object.assign() method to copy an object
const entries = Object.entries(originalObj); // This will create an array of nested arrays of key value pairs of the object.

console.log(obj);
console.log(obj2);
console.log(entries);

//* Destructuring Arrays
// Example 1
const names = ["Andres", "Joao", "Vladyslav", "Zhanna", "Worla"];
const [colombia, portugal, ukraine, ...otherCountries] = names; // In Array destructuring, we create variables for each value in the names array. Each variable is assigned to each value in the names array based on the index. The values without any variables are stored in an array in the otherCountries variable.
console.log(otherCountries); // ["Zhanna", "Worla"]

// Example 2
const arrOfAnimals = ["Bird", "Lion", "Dog", "Cat", "Chicken"];
const newArray = [...arrOfAnimals]; // Anytime you see the three dots on the right side of an equal sign, then a spread operator is being used.
const [animal1, animal2, animal3, ...otherAnimals] = arrOfAnimals; // Anytime you see the three dots on the left side of an equal sign, then a rest operator is being used.
console.log(otherAnimals);

//* Destructuring Objects
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  mileage: 15000,
};

// We use the property name of the object when destructuring the object, for example in the case of the "make" property.
// If we want to use a different variable for a property during destructuring, we write the syntax in the case of the "model" property.
// We can give default values to property names in case the property names does not exist in the object during destructuring in the case of "cost" and "color". Note that they will not be added to the object. They are just variables for our use in the code.
const { make, model: brand, cost = 2000, color = "blue" } = car;
//? The above code is the same as:
// const make = car.make;
// const brand = car.model;
// const cost = 2000;
// const color  = "blue"
