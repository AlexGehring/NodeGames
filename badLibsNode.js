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




  colorPrompt("Welcome to Bad-Libs, my bad version of Mad-Libs! ", "cyan")
  rl.question("If you've brushed up on your nouns, verbs and adjectives, type 'yes' to continue!", (userInput) => {
      let input = userInput.toLowerCase().trim()
      playMyGame(input)

  });
}

function playMyGame(input){
  switch (input){
    case 'yes':
        rl.question("Type a noun of your choice:", (userInput) => {
          let noun = userInput.toLowerCase().trim()
        });

    default:
    colorPrompt("Let's try that again...", "magenta")
    getPrompt();
  }

}

getPrompt();
