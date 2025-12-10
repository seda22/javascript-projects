# Basic Calculator — Version 2 (Input Validation Added)

This version builds on **Version 1** by adding basic input validation to improve user experience and safety.

In V1, the calculator performed addition and subtraction but did not validate user input.  
**V2 introduces validation checks** to ensure that the numbers and operation type entered by the user are valid before performing any calculation.

---

## 🔧 New Features in Version 2

- Validates that both numbers are:
  - not empty  
  - not `null` or `undefined`  
  - numeric values  
- Validates that the operation type is:
  - not empty  
  - one of the two allowed options:  
    - `"addition"`  
    - `"subtraction"`  
- Provides clear error messages on invalid input  
- Gives immediate feedback when the operation type is accepted

---

## 📌 What Has Not Changed

- The core calculation logic from V1 remains the same  
- Still uses `prompt` for user input  
- Still prints the result to the console  

This version focuses specifically on **improving input safety**, not restructuring the calculator.

---

## ▶️ How to Run

1. Open the file `basic-calculator-v2.js` in your browser console  
2. Follow the prompts:
   - Enter first number  
   - Enter second number  
   - Choose operation: `"addition"` or `"subtraction"`  
3. The console will display validation messages and the final result

---

## 🎯 Purpose of Version 2

This update is part of my ongoing JavaScript learning journey.  
The goal of V2 is to understand and practice **input validation**, a key concept in building reliable user-facing applications.

More advanced versions will introduce:
- better error handling  
- stopping execution on invalid input  
- a cleaner control flow  
- a web interface instead of `prompt`  

---

## 👩‍💻 About This Repository

This project is one of the early steps in my path to becoming a Full-Stack Developer through the **Workintech Bootcamp**.  
Each version reflects my progress and learning at different stages.
