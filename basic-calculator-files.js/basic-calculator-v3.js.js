// Advanced Calculator (Addition, Subtraction, Multiplication, Division)
//
// This version goes beyond a simple calculator by adding:
// • Full input validation for both numbers
// • Validation for operation type (1, 2, 3, 4)
// • Special handling for invalid characters, spaces, commas, and multiple dots
// • Prevention of division by zero
// • Dedicated validation functions for clean and reusable code
//
// Program Flow:
// 1) Ask the user for two numbers
// 2) Validate both numbers using a custom validation function
// 3) Ask for the operation type (1–4)
// 4) Validate the operation type
// 5) If all inputs are valid, perform the calculation
// 6) Print either the final result or the corresponding error message
//
// This project is part of my JavaScript learning journey and demonstrates:
// • Clean code practices
// • Separation of concerns
// • Error handling
// • Input validation techniques

let number1Input = prompt("Please enter the first number:");
let number2Input = prompt("Please enter the second number:");
let operationInput = prompt("Please enter the operation: 1 -> addition, 2 -> subtraction, 3 -> multiplication, 4 -> division:");


// Let's call the function to validate number1 and number2
let number1 = validateNumber(number1Input, "First Number");
let number2 = validateNumber(number2Input, "Second Number");




// Validation function for number inputs (number1 and number2).
function validateNumber(value, valueName) {

  // 1) Did the user cancel the input?
  if (value === null) { 
    return `Error: You did not enter a value for ${valueName}.`;
  }

  // 2) Trim leading and trailing spaces. (Placed here because isNaN(" ") would return false.)
  value = value.trim();

  // 3) After trim, is the value empty?
  if (value === "") {
    return `Error: ${valueName} cannot be empty.`;
  }

  // 4) Does the value contain spaces inside?
  if (value.includes(" ")) {
    return `Error: ${valueName} cannot contain spaces.`;
  }

  // 5) Does it contain a comma? (Here we choose to treat it as an error. It could be converted to a dot if desired.)
  if (value.includes(",")) {
    return `Error: You cannot use a comma in ${valueName}. If you want to enter a decimal number, use a dot "." instead.`;
  }

  // 6) Only one dot is allowed for decimal numbers.
 if (value.split(".").length - 1 > 1) {
  return `Error: Only one dot is allowed in ${valueName}.`;
  }

  // 7) Prompt output is always a string. Convert to number (preparation for isNaN).
  const numericValue = parseFloat(value);

  // 8) isNaN check.
  if (isNaN(numericValue)) {
    return `Error: The ${valueName} you entered is not a valid number.`;
  }

  // 9) Negative numbers are allowed in this calculator.
  //    In another program, you might choose to reject negative values.

  // 10) If we reach here, the number is valid. Return it.
  return numericValue;
}


// Validation function for the operation type.
function validateOperationType(operation, operationName) {
  // 1) Did the user cancel the input?
  if (operation === null) { 
    return `Error: You did not enter a value for ${operationName}.`;
  } 

  // 2) Trim leading and trailing spaces.
  operation = operation.trim();

  // 3) After trim, is the value empty?
  if (operation === "") {
    return `Error: ${operationName} cannot be empty.`;
  }

  // 4) Does the value contain spaces?
  if (operation.includes(" ")) {
    return `Error: ${operationName} cannot contain spaces.`;
  }

  // 5) Operation should be a single character.
  if (operation.length !== 1) {
    return `Error: ${operationName} must be exactly one character.`;
  }

  // 6) Define valid options.
  const validOperations = ["1", "2", "3", "4"];
  if (!validOperations.includes(operation)) {
    return `Error: ${operationName} is invalid. You can enter 1, 2, 3 or 4.`;
  }

  // 7) Handle division by zero case here instead of inside the calculation.
  if (operation === "4" && number2 === 0) {
    return "Error: Division by zero is not allowed.";
  }

  return Number(operation);
}
function calculateResult(number1, number2, operationType) {
  if (operationType === 1) {
    return number1 + number2;
  } else if (operationType === 2) {
    return number1 - number2;
  } else if (operationType === 3) {
    return number1 * number2;
  } else if (operationType === 4) {
    return number1 / number2;
  }
}



function runCalculator() {

  // 1) Is the first number invalid?
  if (typeof number1 === "string") {
    console.log(number1);
    return; 
  }

  // 2) Is the second number invalid?
  if (typeof number2 === "string") {
    console.log(number2);
    return;
  }

  // 3) Is the operation type invalid?
  let operationType = validateOperationType(operationInput, "Operation Type");

  if (typeof operationType === "string") {
    console.log(operationType);
    return;
  }

  // 4) All inputs are valid → perform calculation
  let finalResult = calculateResult(number1, number2, operationType);
  console.log("Result:", finalResult);
}


runCalculator();

