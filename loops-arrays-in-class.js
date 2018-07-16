// While else

// 2. Write a program that keeps rolling a die until the roll is a 5. Print out each roll.
// If you haven't yet done so, you should run
// npm install random-int
// and use that to get a random number from 1 to 6.
// Google "npm random-int" for more info.

// roll a die
// check if it is equal to 5 or not
// equal to 5 -> stops
// roll again
// let randomInt = require("random-int");
// // let dieRoll = Math.floor(Math.random() * 6) + 1;
// let dieRoll = randomInt(1, 6);
// let counter = 1;
//
// while (dieRoll != 5) {
//   console.log(dieRoll);
//   dieRoll = randomInt(1, 6);
//   // counter++;
// }
//
// console.log("It took " + counter + " turns to roll a 5");

// 2. Write a function that takes in a number and prints out all of the factors
// of that number. For example, for 23 it will print 1 and 23. For 24, it will
// print 1, 2, 3, 4, 6, 8, 12, 24. Recall that the factors of a number are all
// the numbers it is divisible by (from 1 up to itself).
// Make sure to test this with several numbers (including some huge ones from fun).

function factors(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      factors.push(i);
    }
  }
  console.log(factors);
}

// factors(144);
// factors(1324567);
// factors(9783248308);


// 5. Given a string of any length, return the total number of times "a" or "A" appears.
function countAs(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    // let letter = str.charAt(i);
    let letter = str[i];
    if (letter == "A" || letter == "a") {
      counter++;
    }
  }
  return counter;

}
// // Some tests
// console.log(countAs("happy") == 1);
// console.log(countAs("lady gaga") == 3);
// console.log(countAs("") == 0);




/******************************************************************************
                                   stringTimes()
Instructions:
Given a string and a non-negative integer n, return a larger string that is n
copies of the original string.

Examples:
stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi"
*******************************************************************************/
function stringTimes(strToRepeat, num) {
  let finalAnswer = "";
  for (i = 0; i < num; i++) {
    finalAnswer = strToRepeat + finalAnswer;
  }
}



// 5. Write a function that takes an array and returns an array that contains
// the first letter of each element of the passed in array.
// For example, if ["apple", "banana", "pear"] is passed in, it should
// return ["a", "b", "p"]
function firstLetter(arr) {

}



/******************************************************************************
                                   firstLast6()
Instructions:
Given an array of numbers, return true if 6 appears as either the first or last
element in the array. The array will be length 1 or more.

Examples:
firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false
*******************************************************************************/
function firstLast6(nums) {

}
