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
        rl.question("Type an adverb of your choice:", (userInput) => {
          let adverb = userInput.toLowerCase().trim()
          if (adverb){
            colorPrompt ("You chose the adverb: " + adverb, "red");
            rl.question("Type a noun of your choice:", (userInput) => {
              let noun = userInput.toLowerCase().trim()
              if (noun){
                colorPrompt("You chose the noun: " + noun, "red");
                rl.question("Type a verb in the present tense:", (userInput) => {
                  let verbPresent = userInput.toLowerCase().trim()
                  if (verbPresent){
                    colorPrompt("You chose the verb: " + verbPresent, "red");
                    rl.question("Type a plural noun:", (userInput) => {
                      let pluralNoun = userInput.toLowerCase().trim()
                      if (pluralNoun){
                        colorPrompt("you chose the noun: " + pluralNoun, "red");
                        rl.question("Type a verb in the past tense:", (userInput) => {
                          let verbPast = userInput.toLowerCase().trim()
                          if (verbPast){
                            colorPrompt("You chose the verb: " + verbPast, "red");

                          } else {
                            colorPrompt ("You didnt enter a past tense verb.")
                          }
                        })
                      } else {
                        colorPrompt ("you didnt enter a noun.")
                      }
                    });


                  }else {
                    colorPrompt("you didnt enter a verb")
                  }
                })
              } else {
                colorPrompt("you didnt enter a noun", "red");
              }
            })
          }else {
            colorPrompt("you didnt enter an adverb", "red")
          }
        });

    default:
    colorPrompt("Let's try that again...", "magenta")
    getPrompt();
  }

}

getPrompt();
