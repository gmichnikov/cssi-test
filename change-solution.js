// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...

// change machine
let readline = require("readline-sync");
let cents = parseInt(readline.question("How many cents? "));

const quarters = Math.floor(cents/25);

cents = cents - quarters * 25;
const dimes = Math.floor(cents/10);
debugger;
cents = cents - dimes * 10;
const nickels = Math.floor(cents/5);

cents = cents - nickels * 5;
const pennies = Math.floor(cents);
