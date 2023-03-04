import PromptSync from "prompt-sync";
import chalk from 'chalk';

const print = console.log;

const readLine = new PromptSync();

let text = readLine("Enter your question: ");

print(chalk.blue(text));

print(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Hey look buddy, we're going to ask you a few questions about your project.

// Boohoo, this is the end of the program. Let the user know.

/* 
Receive 5 values;
Calculate the average of the values;
n1 + n1 + n3 / n


*/