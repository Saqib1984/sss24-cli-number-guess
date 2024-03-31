#! /usr/bin/env node

// 1) system will generate a random number

// 2) user choosing number

//3) compare between user and system generated number and show result

import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([{
    name: "userGuessedNumber",
    type: "number",
    message: chalk.yellow.bold.italic("Please guess a number between 1 t0 6 : "),
},]);

if (answer.userGuessedNumber === randomNumber){
    console.log(chalk.green.bold.italic("Congratulation! you guessed right number.==>>", answer.userGuessedNumber))
} else if (answer.userGuessedNumber > 6){
    console.log(chalk.red.bold.italic("You choosed invalid number.==>>", answer.userGuessedNumber))
}
else {console.log(chalk.blue.bold("Sorry! Number ==>>",answer.userGuessedNumber, "wrong answer, please try again."))
}

