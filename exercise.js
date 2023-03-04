import PromptSync from "prompt-sync";

const prompt = new PromptSync();

// Salary increase code:

let salary = Number(prompt("Enter your salary: "));

let increase = Number(prompt("Enter your bonus: "));

let newSalary = salary * (1 + increase / 100);

// Alternate formula:
// const newSalaryAlt = salary * (1 + (increase / 100));

console.log(`Your new salary is: ${newSalary}`);

// Age and driving license code:
// YOB means year of birth

let yob = Number(prompt("Enter your YOB: YYYY"));

// Alternate code:
// const currentYear = 2023;
// UNTESTED CODE, MAY BREAK THE PROGRAM:
// const currentYear = new Date()currentYear.getFullYear();

let age = new Date().getFullYear() - yob;

// function calculateAge(yob) {
//     const currentYear = new Date().getFullYear();
//     let age = currentYear - yob;
//     return age;
// }

// let userAge = Number(calculateAge(yob));

console.log(`Your age is: ${age}`);

if (age < 18) {
    console.log("You can't drive!");
} else {
console.log("You can drive!");
}












