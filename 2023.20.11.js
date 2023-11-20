// * 1. Check if a string ends with a specific character.

let sentence = "Hello World!";

// ? Answer 1
if (sentence[sentence.length - 1] === "!") {
  console.log(true);
}

//? Answer 2
console.log(sentence.endsWith("d")); // this checks the last character of a string and returns a boolean value.

console.log(sentence.startsWith("d")); // this checks the first character of a string and returns a boolean value.

//!-----------------------------------------------------------------------------------------------------------------------

//* 2. Replace all occurrences of a word in a string.

let str = "The cat is black. The cat is cute. The cat is eating. The cat is asleep";
let change = str.replace("cat", "dog"); // the replace method changes the first occurrence of the word to be changed.
let changeAll = str.replaceAll("cat", "dog"); // the replaceAll method changes all the occurrences of the word to be changed.
let changeAllWithRegex = str.replace(/cat/g, "dog"); // the regex searches for all the occurrence and changes them.
console.log(change);
console.log(changeAll);
console.log(changeAllWithRegex);

//! ------------------------------------------------------------------------------------------------------------------------

//* 3.  Concatenate two strings.

let firstWord = "Hello";
let secondWord = "Germany";
let thirdWord = "today";
//? Answer 1
console.log(firstWord + " " + secondWord + " " + thirdWord);
//? Answer 2
console.log(`${firstWord} ${secondWord} ${thirdWord}`); // Using string interpolation involving back ticks.
//? Answer 3
console.log(firstWord.concat(" ", secondWord, " ", thirdWord)); // This is using the concat method. The empty string put space between the strings.

//! ------------------------------------------------------------------------------------------------------------------------

//* 5. Get the character at a particular index.

let anotherWord = "development";
//? Answer 1
console.log(anotherWord[9]);

//? Answer 2
console.log(anotherWord.charAt(9));

//! ------------------------------------------------------------------------------------------------------------------------

//* 6. Check if a string ends with an exclamation mark. If it does, remove the exclamation mark.

let word2 = "This is tutoring!";

//? Answer 1
if (word2[word2.length - 1] === "!") {
  console.log(word2.slice(0, -1));
}

//? Answer 2
if (word2.endsWith("!")) {
  console.log(word2.slice(0, -1));
}
