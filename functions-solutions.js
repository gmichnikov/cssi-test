// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.

function getAverage(potato, tomato) {
  return (potato + tomato) / 2;
}


let num1 = 2;
let num2 = 50;

// console.log(getAverage(num1, num2));

// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?




// 3a. Write an isDivisible function that takes two parameters:
// The original number, and the number we want to know if it's divisible by.
// The function should return true or false.

function isDivisible(dividend, divisor) {
  return dividend % divisor == 0;
}

// 3b. Tests for isDivisible. Two examples have been provided. Add at least 3 more.
// console.log(isDivisible(15, 3) == true);
// console.log(isDivisible(17, 2) == false);
// console.log(isDivisible(144, 12) == true);
// console.log(isDivisible(144711376176, 12) == true);






// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign". If the string's length is less than 2, then simply return the string itself.

// Examples:
// lastTwo("coding") → "codign"
// lastTwo("ab") → "ba"
// lastTwo("a") → "a"

function lastTwo(word) {
  let lastChar = word.charAt(word.length - 1);
  let secondToLastChar = word.charAt(word.length - 2);
  let beginning = word.substring(0, word.length - 2);
  return beginning + lastChar + secondToLastChar;
}

console.log(lastTwo("apricot"))





//
