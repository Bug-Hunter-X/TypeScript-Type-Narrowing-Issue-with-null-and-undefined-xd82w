function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("John Doe")); // Output: Hello, John Doe!

// The error occurs when the function is called with an undefined value instead of null.
console.log(greet(undefined)); // Error: Argument of type 'undefined' is not assignable to parameter of type 'string | null'.