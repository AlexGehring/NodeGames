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
          let smart = userInput.toLowerCase().trim()
          if(smart === 'yes'){
            colorPrompt("You did it! You out smarted the beast!", "yellow")
          } else {
            colorPrompt("No smarts and no strength? You lose!", "Red")
          }
        })
      } 
    })
    break;
    case 'pay':
    colorPrompt("You've just paid the troll...", "red")
    rl.question("Safe choice, but do you have any money? Yes or No", (userInput) => {
      let money = userInput.toLowerCase().trim()
      if (money === 'yes'){
        rl.question("That's great! But do you have Troll Bills? Yes or No", (userInput) => {
          let trollBills = userInput.toLowerCase().trim()
          if (trollBills === 'yes'){
            colorPrompt("You've defeated the Troll! Nice Job!", "yellow")
          }else{
            colorPrompt("You only needed one of the two to win! You did it!", "yellow")
          }
        })
      }else{
        rl.question("That's too bad, do you have any jewels?", (userInput) => {
          let jewels = userInput.toLowerCase().trim()
          if(jewels === 'yes'){
            colorPrompt("You did it! Trolls are greedy and will take your jewels as trade!", "yellow")
          } else {
            colorPrompt("No money or jewels!? You lose!", "Red")
          }
        })
      }
    })
  }

}

getPrompt();
