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




  colorPrompt("Welcome to Bad-Libs, my very bad version of Mad-Libs! ", "cyan")
  rl.question("If you've brushed up on your nouns, verbs and adjectives, type 'yes' to continue!", (userInput) => {
      let input = userInput.toLowerCase().trim()
      playMyGame(input)

  });
}

function playMyGame(input){
  if (input === 'yes'){
        rl.question("Type your name:", (userInput) => {
          let name = userInput.toLowerCase().trim()
          if (name){
            colorPrompt ("You chose the name: " + name, "red");
            rl.question("Type a verb of your choice:", (userInput) => {
              let verb = userInput.toLowerCase().trim()
              if (verb){
                colorPrompt("You chose the verb: " + verb, "red");
                rl.question("Type a noun of your choice:", (userInput) => {
                  let noun = userInput.toLowerCase().trim()
                  if (noun){
                    colorPrompt("You chose the noun: " + noun, "red");
                    rl.question("Type another verb:", (userInput) => {
                      let verbTwo = userInput.toLowerCase().trim()
                      if (verbTwo){
                        colorPrompt("you chose the verb: " + verbTwo, "red");
                        rl.question("Type another noun:", (userInput) => {
                          let nounTwo = userInput.toLowerCase().trim()
                          if (nounTwo){
                            colorPrompt("You chose the noun: " + nounTwo, "red");
                            rl.question("Type yet another noun: ", (userInput) => {
                              let nounThree = userInput.toLowerCase().trim()
                              if (nounThree){
                                colorPrompt("You chose the noun: " + nounThree, "red");
                                rl.question("Type a verb ending in 'ing': ", (userInput) => {
                                  let verbIng = userInput.toLowerCase().trim()
                                  if (verbIng) {
                                    colorPrompt("You chose the verb: " + verbIng, "red");
                                    rl.question("Type a past tense verb: ", (userInput) => {
                                      let pastVerb = userInput.toLowerCase().trim()
                                      if (pastVerb) {
                                        colorPrompt( name+"'s daily routine. Every morning when i wake up i head to the bathroom to " +verb+ " my " +noun+". After that i " +verbTwo+ " up some breakfast. I like to eat eggs and " +nounTwo+", and can't forget a steaming hot cup of " +nounThree +"! When i'm done " +verbIng+", it's time to get " +pastVerb+"." , "magenta");

                                      } else {
                                        colorPrompt("You did not type a past tense verb", "red");
                                      }
                                    })

                                  } else {
                                    colorPrompt("You did not type a verb ending in ing", "red");
                                  }
                                })


                              } else {
                                colorPrompt("You did not type a third noun.", "red");
                              }
                            })

                          } else {
                            colorPrompt ("You didnt enter a second noun.", "red")
                          }
                        })
                      } else {
                        colorPrompt ("you didnt enter a verb.", "red")
                      }
                    });


                  }else {
                    colorPrompt("you didnt enter a noun", "red")
                  }
                })
              } else {
                colorPrompt("you didnt enter a verb", "red");
              }
            })
          }else {
            colorPrompt("you didnt enter a name", "red")
          }
        });


  } else {
    colorPrompt("let's try that again.", "magenta")
    getPrompt();
  }
}



getPrompt();
