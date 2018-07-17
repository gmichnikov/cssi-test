// 8. Make a new empty array.
// Ask the user how many letters they would like to type in.
// Use a for loop to loop that many times.
// Each time through the loop, ask the user to enter a letter. Add that letter to the array.
// At the very end use let str = arr.join("") to turn your array into a string.
// Print out the str
// For example, if they type in 4, and then type in c, a, k, e when asked
// Then at the end it should just say "cake"

let readline = require("readline-sync");

// let letters = [];
// let numLetters = readline.question("How many? ");
// for (i = 0; i < numLetters; i++) {
//   let letter = readline.question("What letter? ");
//   letters.push(letter);
// }
// let finalStr = letters.join("---???%%%");
// console.log(finalStr);

// 3. Make a for loop that prints out the even numbers from 0 to 100.
// Note that there are two ways to do this. One way is to use i += 2 instead of i++.
// This makes i go up by two each time, so that it skips odd numbers.
// The other way is to use an if statement inside the for loop that only prints
// even numbers. Make sure you can do it both ways. (As in, actually do it both ways.)

// for (let i = 0; i <= 100; i += 7.4) {
//   console.log(i);
// }


// 4. Make a variable called sum that is equal to 0.
// Keep asking the user to enter in numbers until all of the numbers they have typed in
// add up to more than 100 in total.
// For example, it might end after two times through the loop if I type 77, 44.
// But it might take many more attempts if I type 1, 1, 1, 1, 1 ....
// let sum = 0;
// let numTimes = 0;
// while (sum < 100) {
//   let num = parseFloat(readline.question("Please enter a number: "));
//   numTimes++;
//   sum = sum + num;
//   console.log("The total is " + sum);
// }
// console.log("You entered " + numTimes + " numbers.");
//


// 7. Last time we listed out all of the factors of a number.
// This time we will do something similar: we will check if a number is a perfect number.
// A perfect number is one where all of the factors (other than the number itself)
// add up to the number itself.
// We will write a function that returns true or false, depending on whether or not it is perfect.
// See https://en.wikipedia.org/wiki/List_of_perfect_numbers if you want to.
// 6 is perfect: 1 + 2 + 3 = 6.
// 28 is too: 1 + 2 + 4 + 7 + 14 = 28
// No other small numbers are.
// Write a function that takes in a number uses a for loop to go through the
// values from 1 to number - 1 and add together all the ones that are factors of
// number. Return true if this sum is equal to number, false otherwise.
// Make sure it returns true for 6 and 28 and false for pretty much anything else.




// This game has already been discussed in the notes on the site.
// Do not look back at those notes, that would ruin the learning.
// If you have not yet done so, run npm install random-int in terminal.
// Google "npm random-int" to see how it works.
// We will make a guessing game as follows:
// Set a random number from 1 to 100 to be the answer.
// Ask the user to guess a number.
// If they're wrong, you should ask them to guess again.
// Each time they guess, you should be telling them if their guess was too high or too low.
// Also, you should be tracking how many times they have guessed.
// Then, at the end, when you tell them that they guessed correctly,
// you should mention how many guesses it took them.

let randomInt = require("random-int");
let computerNumber = randomInt(0, 10000);

let guess = readline.question("Guess: ");
let numGuesses = 1;

while (guess != computerNumber) {
  if (guess > computerNumber) {
    console.log("Too High");
  } else if (guess < computerNumber) {
    console.log("Too Low");
  }
  guess = parseInt(readline.question("Guess: "));
  numGuesses++;
}

console.log("You got it in " + numGuesses + " guesses.");








//
