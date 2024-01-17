//* NOTE: This app is incomplete. You can explore other ways to make it more complete for you 😀

console.clear();

// This is the person class
class Person {
  // private properties
  #bankPassword;
  #bankBalance = 0;
  constructor(bankFirstName, bankLastName, bankEmail, bankPassword, bankAge, bankCity) {
    this.firstName = bankFirstName;
    this.lastName = bankLastName;
    this.email = bankEmail;
    this.#bankPassword = bankPassword;
    this.age = bankAge;
    this.city = bankCity;

    Object.seal(this);
  }

  // this creates a random account number for the user
  #createAccountNumber() {
    const random = Math.floor(Math.random() * 1000000000);
    return random;
  }

  // this shows the account number to the user if the password is correct
  showAccountNumber(password) {
    if (password === this.#bankPassword) {
      return `Your account number is ${this.#createAccountNumber()}`;
    } else {
      return "Your password is invalid";
    }
  }

  // this deposits an amount into the bank balance of the user
  deposit(amount, password) {
    if (password !== this.#bankPassword) {
      return "Sorry, your password is incorrect. We cannot process this transaction.\n";
    } else {
      if (amount <= 0) {
        return `You did not deposit any money. Your balance is ${this.#bankBalance}.\n`;
      } else {
        this.#bankBalance += amount;
        return `You have successfully deposited ${amount} to your account. Your new bank balance is ${this.#bankBalance}.\n`;
      }
    }
  }

  // this withdraws an amount from the bank balance of the user
  withdraw(amount, password) {
    if (password !== this.#bankPassword) {
      return "Sorry, your password is incorrect. We cannot process this transaction. \n";
    } else {
      if (amount > this.#bankBalance) {
        return "Sorry, You do not have sufficient money to withdraw!. \n";
      } else {
        this.#bankBalance -= amount;
        return `You have successfully withdrawn ${amount} from your account. Your new bank balance is ${this.#bankBalance}. \n`;
      }
    }
  }
}

// this is the same as ==> import rs from "readline-sync" but you have to initialize npm to use the import keyword.
const rs = require("readline-sync"); //! install readline-sync or else it will not work

// get initial data from the user
let firstName = rs.question("Enter your first name: \n> ");
let lastName = rs.question("Enter your last name: \n> ");
let email = rs.question("Enter your email address: \n> ");
let password = rs.question("Create a password: \n> ");
let age = rs.question("Enter your age: \n> ");
let city = rs.question("Enter your city: \n> ");

// create an object using the Person class and passing the data from the user as arguments
const person1 = new Person(firstName, lastName, email, password, age, city);
// console.log(person1);

// this gets the password form the user again and only shows the account number if the password is correct. (Refer to the Person class for the code)
let checkAccountNumber = rs.question("To check your Account Number, enter your password: \n> ");
console.log(person1.showAccountNumber(checkAccountNumber));

// these are global variables
let passwordToDepositORWithdraw;
let choose;

// this do-while while code will keep running until the user enters quit to stop the app.
do {
  choose = rs.question(`To deposit money, type "Deposit" and to withdraw money, type "Withdraw". Type "quit" to quit the app. \n> `);
  if (choose === "quit") {
    console.log("Thanks for your time.");
  } else {
    if (choose.toLowerCase() === "deposit") {
      passwordToDepositORWithdraw = rs.question("Enter your password: \n> ");
      let depositMoney = +rs.question("Enter amount to deposit: \n> ");
      console.log(person1.deposit(depositMoney, passwordToDepositORWithdraw));
    }
    if (choose.toLowerCase() === "withdraw") {
      passwordToDepositORWithdraw = rs.question("Enter your password: \n> ");
      let withdrawMoney = +rs.question("Enter amount to withdraw: \n> ");
      console.log(person1.withdraw(withdrawMoney, passwordToDepositORWithdraw));
    }
  }
} while (choose !== "quit");
