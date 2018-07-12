// Outline of solution
// Need have readline
// Computer needs to pick rock paper scissors -- randomly
// The user needs to pick rock paper scissors -- readline
// Need to figure out who wins and who loses or if it's a tie

let readline = require("readline-sync");
let userChoice = readline.question("Pick rock, paper, or scissors: ");

let compNum = Math.random() * 3;

let compChoice;
if (0 <= compNum && compNum < 1) {
  compChoice = "rock";
} else if (1 <= compNum && compNum < 2) {
  compChoice = "paper";
} else {
  compChoice = "scissors";
}

console.log("You chose " + userChoice + " and computer chose " + compChoice);

if (compChoice == "rock" && userChoice == "paper") {
  console.log("Human wins");
} else if (compChoice == "scissors" && userChoice == "rock") {
  console.log("Human wins");
} else if (compChoice == "paper" && userChoice == "scissors") {
  console.log("Human wins");
} else if (compChoice == "rock" && userChoice == "scissors") {
  console.log("Human loses");
} else if (compChoice == "paper" && userChoice == "rock") {
  console.log("Human loses");
} else if (compChoice == "scissors" && userChoice == "paper") {
  console.log("Human loses");
} else if (compChoice == userChoice) {
  console.log("Tie");
}
