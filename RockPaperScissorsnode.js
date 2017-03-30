'use strict';
const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function colorPrompt(prompt, color = "blue"){
  return console.log(chalk[color](prompt))
}
const getPrompt = () => {
  rl.on('SIGINT', () => {
    console.log(chalk.cyan('Bye!'));
    return process.exit();
  });




  colorPrompt("ROCK, PAPER, SCISSORS!!!!", "cyan")
  rl.question("Do you choose rock, paper or scissors: ", (userInput) => {
      let input = userInput.toLowerCase().trim()
      rockPaperScissors(input)

  });
}

function rockPaperScissors(input){
  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
  	computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
  	computerChoice = "paper";
  } else {
  	computerChoice = "scissors";
  } colorPrompt("Computer: " + computerChoice, "yellow");

  if (input === computerChoice){
    colorPrompt("The result is a tie! Try again!", "red");
    getPrompt();
  } else if (input === "rock"){
    if (computerChoice === "scissors"){
      colorPrompt("Rock Vs. Scissors means you win!", "magenta");
      getPrompt();
    } else {
      colorPrompt("Rock vs. Paper means you lose!", "yellow");
      getPrompt();
    }
  }
  else if(input === "paper"){
    if(computerChoice === "rock"){
      colorPrompt("Paper vs. Rock means you win!", "magenta");
      getPrompt();
    } else {
      colorPrompt("Paper vs. Scissors means computer wins!", "magenta");
      getPrompt();
    }
  }
  else if(input === "scissors"){
    if(computerChoice === "rock"){
      colorPrompt("Scissors vs. Rock means computer wins!", "magenta");
      getPrompt();

    } else {
      colorPrompt("Scissors vs. Paper means you win!", "magenta");
      getPrompt();
    }
  }

};
getPrompt();
