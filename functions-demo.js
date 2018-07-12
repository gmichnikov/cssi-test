let readline = require("readline-sync");

// function sumTwoNumbers(num1, num2) {
//   return num1 + num2;
// }
//
// let mySum = sumTwoNumbers(3, 5);
// console.log(mySum);
//

function askForNumber() {
  let num = parseFloat(readline.question("What is your number? "));
  return num;
}

let a = askForNumber();
let b = askForNumber();
let c = askForNumber();
console.log(a, b, c);
