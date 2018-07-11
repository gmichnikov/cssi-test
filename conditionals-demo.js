let readline = require("readline-sync");

let num1 = parseFloat(readline.question("Enter a number: "));
let num2 = parseFloat(readline.question("Enter a number: "));
let num3 = parseFloat(readline.question("Enter a number: "));

if (num1 > num2 && num1 > num3) {
  console.log("The first one was biggest");
} else if (num1 < num2 && num2 > num3) {
  console.log("The second one was biggest");
} else {
  console.log("The third one was biggest");
}
