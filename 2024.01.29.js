const rs = require("readline-sync");

let count = 0; // This variable is created to keep track of the number of times the user creates a password.
let userInput = rs.question("How long do you want your password to be? Enter the number: \n> "); // The user is asked to input the length of password they want to generate.
const allPasswordsGenerated = []; // this variable stores all the passwords that the user creates in an array

do {
  if (userInput.toLowerCase() === "quit") {
    // when the user types "quit", Javascript swill break out of the do-while loop and go to the next line of code.
    break;
  }

  if (isNaN(userInput) || userInput === "0" || userInput === "") {
    // When any of the conditions is true, the nested do while loop should run until all the conditions are false.
    do {
      userInput = rs.question("\nEnter a digit to get a password. Enter a digit more than 0: \n> ");
      if (userInput.toLowerCase() === "quit") {
        break;
      }
    } while (isNaN(userInput) || userInput === "0" || userInput === "");
  } else {
    let password = ""; // this variable stores the password that will generated from the while loop.
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZY!()-.[]_`~;:@$%^&=+?*#1234567890"; // This variable stores all the characters we will be using for the password.

    while (password.length < userInput) {
      // this means that as long as the password.length IS NOT equal to the number the user will give, the while loop should keep on running. Note that the while loop is different from the do-while loop.
      const random = Math.floor(Math.random() * characters.length); // this variable generate a number that will be used as an index.
      const randomCharacter = characters[random]; // the number generated and stored in the random variable will be used as an index to get the value of the character at that index in the characters string. It will then be stored in randomCharacter.
      if (!password.includes(randomCharacter)) {
        // Since we don't want to have the same characters appearing twice in the password, we write this condition to find out if the character is already present in the password variable. If is not already in the password variable, the character is added to the password variable
        password += randomCharacter;
      }
    }
    console.log("\n🔒 Here is your password:", password); // The password is then logged to the user after the while loop is completed.

    allPasswordsGenerated.push(password); // The password generated is then added to the allPasswordGenerated array.

    count++; // The count variable is increased to indicate that a password has been created.

    userInput = rs.question("\nDo you want to generate another password? Enter the number you want. Type 'quit' to quit the app: \n> "); // The user is then asked if another password should be generated. if the user wants another password generated, the do-while loop will run again. If the user types "quit", the do-while loop will stop running and JavaScript will move to the next line of code.
  }
} while (userInput.toLowerCase() !== "quit");

let noOfPasswords = count === 0 ? "no password" : count === 1 ? `${count} password` : `${count} passwords`; // The noOfPasswords variable will store strings based on the conditions in the ternary operator

console.log(`\nYou generated ${noOfPasswords} from this app. See you later`); // The user is informed of the number of passwords created before the app quits.

// This is one way of displaying the passwords in the array in a string format, by using the join() method.
//? console.log(`These were the passwords:`, allPasswordsGenerated.join(", "));

// THis is another way of displaying the passwords in the array in a string format, by using the map() and join() methods together.
const showPasswords = allPasswordsGenerated
  .map((password, index) => {
    return `${index + 1}. ${password}`;
  })
  .join("\n");

console.log(showPasswords);
