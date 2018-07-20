let fs = require('fs');
const words = fs.readFileSync('words.txt').toString().split("\n");
let readline = require('readline-sync');
let randomInt = require('random-int');



// 4a. Write a function that takes in an array and a number and returns the index
// at which that number FIRST appears in the array.
function firstTime(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num == target) {
      return i;
    }
  }
}
// If your function is correct, these should both print true.
// console.log(firstTime([2, 3, 4, 2, 5, 3, 4], 4) == 2);
// console.log(firstTime([2, 3, 4, 2, 5, 3, 4], 3) == 1);



// 4b. Write a function that takes in an array and a number and returns the index
// at which that number LAST appears in the array.
function lastTime(arr, num) {
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   let num = arr[i];
  //   if (num == target) {
  //     return i;
  //   }
  // }
  let targetIndex;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num == target) {
      targetIndex = i;
    }
  }
}
// If your function is correct, these should both print true.
// console.log(lastTime([2, 3, 4, 2, 5, 3, 4], 4) == 6);
// console.log(lastTime([2, 3, 4, 2, 5, 3, 4], 3) == 5);



// 9. Write a function that takes in a number and returns the factorial of that number.
// More info: https://www.mathsisfun.com/numbers/factorial.html
// Use a for loop. Do not try to use the factorial symbol (!), it does not mean that in coding.
function factorial(num) {
  for (let h = num - 1; h >= 1; h--) {
    num *= h;
  }
  console.log(num);
}
factorial(10);
// These should all print true when you are done.
// console.log(factorial(5) == 120);
// console.log(factorial(1) == 1);




// 10. Write a function that takes in a number and returns an array that adds that many
// Fibonacci numbers to the starting array of [0, 1].
// More info: https://www.mathsisfun.com/numbers/fibonacci-sequence.html
// Use a for loop.
// For example, if you call fibonacci(3), that means we want to add three numbers
// onto that array, so the return value should be the array [0, 1, 1, 2, 3]
function fibonacci(num) {
  let arr = [0, 1]; // This is the starter array that you will add numbers to
  // For loop here
  for (var i = 0; i < num; i++) {
    let lastNumber = arr[arr.length - 1];
    let secondToLastNumber = arr[arr.length - 2];
    arr.push(lastNumber + secondToLastNumber);
  }
  console.log(arr);
}
fibonacci(20);
// These tests should print true when you are done
// console.log(fibonacci(5).pop() == 8);
// console.log(fibonacci(8).pop() == 34);
