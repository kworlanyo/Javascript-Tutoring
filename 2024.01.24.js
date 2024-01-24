// List of products in the shop
const products = [
  {
    id: 1,
    name: "Laptop",
    brand: "ABC",
    price: 999.99,
    category: "Computers",
  },
  {
    id: 2,
    name: "Gaming PC",
    brand: "XYZ",
    price: 1499.99,
    category: "Gaming",
  },
  {
    id: 3,
    name: "External Hard Drive",
    brand: "Seagate",
    price: 79.99,
    category: "Storage",
  },
  {
    id: 4,
    name: "Wireless Mouse",
    brand: "Logitech",
    price: 29.99,
    category: "Accessories",
  },
  {
    id: 5,
    name: "27-inch Monitor",
    brand: "Dell",
    price: 349.99,
    category: "Monitors",
  },
];

// We have to install readline-sync and use it here using the require function.
//* You can also use the import method but you have to initialize npm in your console and add type: module to the package.json file.
//* Then write import rs from "readline-sync" here to use the readline-sync.
const rs = require("readline-sync");

// The cart and choose variables are declared in the global scope so that they will be available to other scopes as well.
let cart = [];
let choose;

// This is the first line of code that will be logged into the console.
console.log(`Welcome to the Online Shopping Store`);

// Functions are created so that we can use the codes inside to avoid repetition of code.
// The menu() function contains code that will show the menu of the app to the user when it is called.
function menu() {
  console.log(`\nThis is the menu
1. View Products
2. View Cart
3. Checkout
4. Exit\n`);
}

// The viewProducts function contains code that will show the products to the user when it is called.
// We use map() array method to show the products to the user in a way that we want.
// Remember that the map() method returns a new array so we use join() method at the end of the map() method to convert the array created by the map() method into a string.
function viewProducts() {
  return products
    .map((productObj) => {
      return `\nID: ${productObj.id}
NAME: ${productObj.name}
BRAND: ${productObj.brand}
PRICE: ${productObj.price}
CATEGORY: ${productObj.category}`;
    })
    .join("\n");
}

// The choices variable is declared in the global scope so that it will be available to all other scopes.
let choices = [1, 2, 3, 4]; // this array helps us so that when the user enters a value that is not inside the array, we can ask the user to give the right value.
let selectedOption; // This variable is declared in the global scope so that it can be available to all other scopes.

// The do while loop is important here because it will make the code inside it continue running until a condition is met and then it stops.
// We want the code to keep running until the user enters a value to stop the code.
do {
  menu(); // the menu function will be the first code to run in the main do while loop.
  selectedOption = +rs.question("Select an option by typing a number to continue: \n> "); // We are asking the user to enter a number to access any of the menu options.
  if (!choices.includes(selectedOption)) {
    // if the value the user enters is not inside the choices array, we will create a nested do while loop which will keep on running to ask the user to enter the correct value. The nested do while loop stops when the user enters the correct value.
    do {
      selectedOption = +rs.question("\nEnter a valid number from 1 to 4 to continue: \n> ");
    } while (!choices.includes(selectedOption));
  }

  // The option 1 for the menu is to view the products.
  if (selectedOption === 1) {
    // If the user enters 1, we will call the viewProducts function to display the products to the user.
    console.log(viewProducts());
    // We will then create a nested do while loop to repeatedly execute some code after showing the user the products.
    do {
      choose = +rs.question("\nAdd a product to cart by entering the id number of the product. Type '0' to go back to menu: \n> ");
      let check = products.find((obj) => obj.id === choose); // After asking a value from the user, we will check to see if the value matches with any of the ids of the products in the products array.
      if (check === undefined && choose !== 0) {
        // If after checking, there is no product by that id or the value the user gave is not 0, we inform the user that there is no product id with that number.
        console.log(`There is no product by that id number!`);
      } else {
        // if the user enters 0, we will immediately stop the nested do while loop by using the break statement. This means the code will start again from the first do while loop and show the menu again.
        if (choose === 0) {
          break;
        } else {
          // if the user enters the right value, we will find the id that matches that value and then we will push the product with that id into the cart.
          let productChosen = products.find((obj) => obj.id === choose);
          cart.push(productChosen);
          console.log(`The product, ${productChosen.name} has been added to your cart!`); // We will give a message to the user that the product has been added to the cart.
        }
      }
    } while (true);

    // The option 2 for the menu is to view the cart.
  } else if (selectedOption === 2) {
    if (cart.length === 0) {
      // If there is no product in the cart, we will inform the user that the cart is empty.
      console.log(`\nYour cart is empty\n`);
    } else {
      console.log(cart); // If the cart is not empty, we will then show the user the items that have been added to the cart.
    }

    // The option 3 in the menu is to checkout the items in the cart.
  } else if (selectedOption === 3) {
    if (cart.length === 0) {
      // If there is no product in the cart, we will inform the user that the cart is empty.
      console.log(`\nYou do not have any item in your cart to checkout\n`);
    } else {
      // If there are products in the cart, we will then apply a reduce() array method on the cart array to calculate the total price of the products and then save the total price in a variable.
      let totalPrice = cart.reduce((acc, currObj) => acc + currObj.price, 0);
      console.log(`\nYou have ${cart.length} items in your cart. The total price is $${totalPrice}\n`); // We will inform the user about the number of items in the cart and the total price of the items.

      // We will then ask the user to either confirm the total price and pay or exit to the menu if the user does not want to checkout again.
      let confirm = +rs.question(`Enter 1 to confirm and pay. Enter 0 to go main menu: \n> `);

      // If the user confirms, we give the user a message that payment has been successful.
      // We then empty the cart by assigning it to an empty array and the code will go back to the menu again because of the main do while loop.
      if (confirm === 1) {
        console.log(`\nPayment is successful. You paid $${totalPrice}. Redirecting you to the menu...\n`);
        cart = [];
      } else if (confirm !== 0) {
        // if the user does not enter the right value, we create a nested do while loop that will keep asking the user for the right value. When the right value is given, the nested do while loop here will stop.
        do {
          confirm = +rs.question(`\nEnter 1 to confirm and pay. Enter 0 to go main menu: \n> `);
        } while (confirm !== 0);
      }
    }
  }
} while (selectedOption !== 4); // This is the end of the main do while loop. This means when the user enters 4 which is for the exit option in the menu, the main do while loop will stop running.

// This code will run after the user enters 4 which is the exit option in the menu.
console.log("\nHave a lovely day.");
