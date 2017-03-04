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




  colorPrompt("Your reputation precedes you, i heard you've battled\nthe most fearsome creatures in this land\nand now you've decided to test yourself\nagainst the dragon.", "cyan")
  rl.question("...are you prepared for battle? Yes or No", (userInput) => {
      let input = userInput.toLowerCase().trim()
      fightPayRun(input)

  });
}

function fightPayRun(input){
  var slaying = true;
  var youHit = Math.floor(Math.random() * 2);
  var damageThisRound = Math.floor(Math.random() * 5 + 1);
  var totalDamage = 0;
  switch (input){
    case 'yes':
    while (slaying) {
      if (youHit) {
        colorPrompt("You hit the dragon " + damageThisRound + " times!", "magenta");
        totalDamage += damageThisRound;

        if (totalDamage >= 4) {
          colorPrompt("That was enough to slay the dragon! You will live to slay again!", "yellow");
          slaying = false;
        } else {
          youHit = Math.floor(Math.random() * 2);
        }
      } else {
        colorPrompt("You're no match for the Dragon! You're toast!", "red");
        slaying = false;
      }
    }
    default:
    colorPrompt("Let's try that again...", "magenta")
    getPrompt();
  }

}

getPrompt();
