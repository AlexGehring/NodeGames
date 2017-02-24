'use strict';
const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function fightPayRun(input){
  switch (input){
    case 'fight':
    colorPrompt("You're fighting the troll.", "red")
  }
}
function colorPrompt(prompt, color = "green"){
  return console.log(chalk[color](prompt))
}
const getPrompt = () => {
  rl.on('SIGINT', () => {
    console.log(chalk.cyan('Bye!'));
    return process.exit();
  });
  colorPrompt("You're walking through the forest, minding your own business.", "green")
  rl.question("...and you run into a troll!\n Do you FIGHT him, PAY him, or RUN?", (userInput) => {
      let input = userInput.toLowerCase().trim()
      fightPayRun(input)
      getPrompt();
  });
}

getPrompt();
