// Basic Calculator (Addition – Subtraction)
//
// This project asks the user for two numbers
// and the type of operation they want to perform.
// The program then calculates and prints the correct result.
//
// Requirements:
// • Ask the user for two numbers.
// • Ask which operation will be used (addition or subtraction).
// • Write a function that takes the numbers and the operation type.
// • Return the correct result from the function.
// • Print the result to the console.
// • Show an error message if the operation is invalid.
//
// This is a beginner-level JavaScript exercise focusing on:
// - user input (prompt)
// - basic functions
// - conditional statements (if/else)
// - parsing numeric values

const number1Input = prompt("Please enter the first number:");
const number2Input = prompt("Please enter the second number:");
let operationType = prompt("Please enter the operation (addition/subtraction):");  


let num1 = parseFloat(number1Input);
let num2 = parseFloat(number2Input);

function calculate(x, y, operationType) {
    if(operationType === "addition") {
        return x + y;
    } else if (operationType === "subtraction") {
        return x - y;
    } else {        
        return ("Error: You entered an invalid operation type.");    
}   
}
   
let result = calculate(num1, num2, operationType);

if (result !== "Error: You entered an invalid operation type.") {   
    console.log(`Result: ${result}`);
} else {
    console.log("Error: You entered an invalid operation type.");
}   ;
