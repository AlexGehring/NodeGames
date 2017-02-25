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

  colorPrompt("You're walking through the forest, minding your own business.", "green")
  rl.question("...and you run into a troll!\n Do you FIGHT him, PAY him, or RUN?", (userInput) => {
      let input = userInput.toLowerCase().trim()
      fightPayRun(input)

  });
}

function fightPayRun(input){
  switch (input){
    case 'fight':
    colorPrompt("You're fighting the Troll!", "red")
    rl.question("This looks like an uneaven match, are you strong? Yes or No", (userInput) => {
      let strong = userInput.toLowerCase().trim()
      if (strong === 'yes'){
        rl.question("That's great, but are you smart?", (userInput) => {
          let smart = userInput.toLowerCase().trim()
          if (smart === 'yes'){
            colorPrompt("You've defeated the Troll! Nice Job!", "yellow")
          }else{
            colorPrompt("You only needed one of the two to win! You did it!", "yellow")
          }
        })
      }else{
        rl.question("That's too bad, but are you smart?", (userInput) => {
          let smart = userInput.lowerCase().trim()
          if(smart === 'yes'){
            colorPrompt("You did it! You out smarted the beast!", "yellow")
          } else {
            colorPrompt("No smarts and no strength? You lose!", "Red")
          }
        })
      }
    })
  }

}

getPrompt();
