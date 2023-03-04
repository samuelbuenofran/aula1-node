import PromptSync from "prompt-sync";

const fs = require('fs');

const readLine = new PromptSync();

let text = readLine("Enter your question: ");

alert(text);