# TypeScript Arithmetic Functions with Improved Error Handling

This repository demonstrates a common error in TypeScript: insufficient error handling in mathematical functions. The initial code provides basic arithmetic operations (addition, subtraction, multiplication, division), but only the division function includes error handling for division by zero.  This improved version adds more robust error handling to ensure the functions are more reliable.

## Bug
The original `bug.ts` file contains functions that are vulnerable to unexpected input.  There's a lack of checks for non-numeric input, leading to potential runtime errors.  The `divide` function is the only one with error handling. 

## Solution
The `bugSolution.ts` file addresses this by adding input validation to all functions.  It checks if the inputs are numbers and handles non-numeric input gracefully, either by returning a default value or throwing a more informative error.

## How to Run

1. Clone the repository.
2. Compile the TypeScript code using `tsc bug.ts` and `tsc bugSolution.ts`.
3. Run the resulting JavaScript files.