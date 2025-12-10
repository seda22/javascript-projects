// Basic Calculator (Addition – Subtraction) - Version 2
//
// This version expands on Version 1 by adding basic input validation.
// The program now checks:
// • whether the user entered valid numbers,
// • whether the operation type is acceptable,
// • and prints clear error messages when needed.
//
// Program flow:
// 1. Ask the user for two numbers.
// 2. Ask which operation they want to perform (addition or subtraction).
// 3. Validate the inputs (numbers + operation type).
// 4. If inputs are valid, calculate the result and print it to the console.
// 5. If inputs are invalid, show an appropriate error message.
//
// This project is part of my JavaScript learning journey as a future Full-Stack Developer.

const number1Input = prompt("Please enter the first number:");
const number2Input = prompt("Please enter the second number:");
let operationType = prompt("Please enter the operation (addition/subtraction):");  

// INPUT VALIDATION
if (number1Input === null || number1Input === undefined || isNaN(number1Input) || number1Input.trim() === "") {
    console.log("Error: Please enter a valid first number.");
};
if (number2Input === null || number2Input === undefined || isNaN(number2Input) || number2Input.trim() === "") {
    console.log("Error: Please enter a valid second number.");
};

if (operationType === null || operationType === undefined) {
    console.log("Error: Please enter a valid operation type.");
} else if (operationType !== `addition` && operationType !== `subtraction`) {
    console.log("Error: Please enter a valid operation type.");
} else {
    console.log("Operation accepted.");
}


let num1 = parseFloat(number1Input);
let num2 = parseFloat(number2Input);



function calculate(x, y, operationType) {
    if(operationType === "addition") {
        return x + y;
    } else if (operationType === "subtraction") {
        return x - y;
    } else {        
        return ("Error: Please enter a valid operation type.");    
}   
}
   
let result = calculate(num1, num2, operationType);

if (result !== "Error: Please enter a valid operation type.") {   
    console.log(`Result: ${result}`);
} else {
    console.log("Error: Please enter a valid operation type.");
}   ;
