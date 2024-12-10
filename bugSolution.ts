function greet(name: string | null | undefined): string {
  if (name === null || name === undefined) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet(undefined)); // Output: Hello, world!
console.log(greet("John Doe")); // Output: Hello, John Doe!

//Alternatively, use optional chaining
function greet2(name: string | null | undefined): string {
  return `Hello, ${name ?? 'world'}!`;
}
console.log(greet2(null)); // Output: Hello, world!
console.log(greet2(undefined)); // Output: Hello, world!
console.log(greet2("John Doe")); // Output: Hello, John Doe!