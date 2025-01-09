function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: arguments must be numbers');
  }
  return a + b;
}

function subtract(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: arguments must be numbers');
  }
  return a - b;
}

function multiply(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: arguments must be numbers');
  }
  return a * b;
}

function divide(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

let result: number = add(5, 3); // result is 8
result = subtract(10, 4); // result is 6
result = multiply(7, 2); // result is 14
result = divide(20, 5); // result is 4

//Demonstrates error handling
try {
  let result2 = add("hello",5);
} catch (e) {
  console.error(e);
}
