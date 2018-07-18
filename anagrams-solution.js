// Words are anagrams if they have the same number of each letter
// For example, creative and reactive are anagrams because they both have
// 2 e's, 1 c, etc.

// This code will load around 10k English words into an array called words.
// It will be useful to have this array for various challenges here.
// Note: this is not *every* English word so don't complain if your favorite is missing.
let fs = require('fs');
const words = fs.readFileSync('words.txt').toString().split("\n");
// Note that all the words are in lowercase.


// 1. In the array above, find all words that are 12 letters long.
// Specifically, add them all to a new array and then print out that array at the end.
// (You shouldn't use an object to do this, it's a warm up.)

// let thirteenLong = [];
// let longestWordLength = words[0].length;
// let longestWord = words[0];
// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
//   if (word.length >= longestWordLength) {
//     longestWord = word;
//     longestWordLength = word.length;
//   }
//
// }
// console.log(longestWord, longestWordLength);




// 2. Find all words that contain both x and z (or whatever fun combos you like).
// Again, add them to a new array and print out that array at the end.
// Hint: Look up how to use str.includes(otherStr), a string method that checks if a string
// contains another string (which could be one or more letters).
// (You shouldn't use an object to do this, it's a warm up.)

// let containBoth = [];
// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
//   if (word.includes("q") && word.includes("r")) {
//     containBoth.push(word);
//   }
//
// }
// console.log(containBoth);


// 5. Find all words in the array that contain at least 4 E's.
// You will need to create a counter object for each word in the array.
// And then figure out a way to check if it has at least 4 E's.

let has4Es = [];
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let countEs = 0;

  //////////// going through each word
  for (let j = 0; j < word.length; j++) {
    let letter = word.charAt(j);
    if (letter.toLowerCase() == "e") {
      countEs++;
    }
  }
  ////////////

  if (countEs >= 4) {
    has4Es.push(word);
  }
}
console.log(has4Es);
