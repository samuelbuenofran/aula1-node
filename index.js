import PromptSync from "prompt-sync";

const prompt = new PromptSync();

const name = prompt("Type in your name: ");

console.log(`Hello, ${name}!`);

const temp = Number(prompt("Type in the temperature: "));

if(temp > 38) {
    console.log("You got a fever.");
} else if (temp < 26){
    console.log("You got hypothermia.");
} else {
    console.log("You're alright.");
}

