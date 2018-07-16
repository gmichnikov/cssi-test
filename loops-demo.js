let readline = require("readline-sync");
// let num = 0;
// while (num < 10) {
//   num = parseInt(readline.question("Enter a number: "));
//   console.log(num);
// }
//
// while (dice != 5 && name != "Greg") {
//
// }
//
//
// let word = "tertiary";
// let letter;
// for (let i = 0; i < word.length; i++) {
//   // letter = word.charAt(i);
//   letter = word[i];
//   console.log(letter.toUpperCase());
// }


// let name = readline.question("Asd");
// console.log(name.length);



function hasB(word) {
  for (let i = 0; i < word.length; i++) {
    // let letter = word[i];
    let letter = word.charAt(i);
    if (letter.toUpperCase() == "B") {
      return true;
    }
  }
  return false;
}

console.log(hasB("lab"));
