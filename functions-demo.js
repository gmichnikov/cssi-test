let readline = require("readline-sync");

// function sumTwoNumbers(num1, num2) {
//   return num1 + num2;
// }
//
// let mySum = sumTwoNumbers(3, 5);
// console.log(mySum);
//

// function askForNumber() {
//   let num = parseFloat(readline.question("What is your number? "));
//   return num;
// }
//
// let a = askForNumber();
// console.log(a);


// testing functions

// function triple(num) {
//   return num * 3;
// }

// console.log("triple(7) --> 21 ... ", triple(7));
// console.log("triple(11): ", triple(11) == 33);


function test(a) {
  if (a == undefined) {
    a = readline.question("What? ");
  }
  console.log(a);
}

test("greg");
test();

//
