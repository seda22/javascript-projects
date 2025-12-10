📄 README.md — Basic Calculator V3
Advanced Calculator — Version 3

A fully validated, error-resistant calculator built with vanilla JavaScript.

Version 3 is the most advanced iteration of my calculator project.
This version introduces strong input validation, edge-case handling, and clean code structure for a real-world–ready calculator.

🚀 What’s New in V3?

Compared to earlier versions, this calculator now includes:

✔ Full number validation

✔ Rejection of:

Empty inputs

Spaces

Commas

Multiple dots

Non-numeric characters

✔ Validation for operation type (1, 2, 3, 4)

✔ Division-by-zero protection

✔ Reusable functions for cleaner architecture

✔ Separation of concerns (validation, calculation, and execution)

✔ Clear & user-friendly error messages

This version feels much closer to production-style JavaScript.

🧠 What This Project Demonstrates

From this version, I practiced and implemented:

Structured input validation

Clean function design

Defensive coding (anticipating user errors)

Handling edge cases

Separation of logic layers (validate → compute → output)

Real-world thinking in small projects

🔧 How the Program Works

User enters two values

Program validates each value using validateNumber()

User enters the operation type:

1 → addition

2 → subtraction

3 → multiplication

4 → division

validateOperationType() checks the input

If any input is invalid → program prints the error & stops

Otherwise, calculateResult() performs the math

Final result is printed to the console

🧪 Example Inputs
Valid Example
First Number: 12.5
Second Number: 3
Operation: 3
Output → Result: 37.5

Invalid Example (multiple dots)
Input: 12..5
Output: Error: Only one dot is allowed in First Number.

📂 Project Files

basic-calculator-v3.js — main source code with validation & calculation logic


basic-calculator-v3.js

🏗️ Future Improvements (V4 & beyond)

Add UI (HTML/CSS interface instead of prompts)

Support for additional operations (power, percentage, root…)

Modular JavaScript file structure

Integration with a real form-based input system

Error messages rendered on a webpage instead of console

✔️ Status

Version 3 is complete and stable.
It represents a meaningful jump toward professional-level JavaScript structure.
