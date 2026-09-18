// ============================================================
// TERNARY OPERATOR IN JAVASCRIPT
// ============================================================

// 1. WHAT IS IT?
// Ternary operator is a short way to write a simple if...else.
//
// Instead of:
//
// if (age >= 18) {
//   result = "Adult";
// } else {
//   result = "Minor";
// }
//
// We can write:
//
// result = age >= 18 ? "Adult" : "Minor";


// 2. BASIC SYNTAX
//
// condition ? valueIfTrue : valueIfFalse;
//
// Rules:
// - condition comes before ?
// - ? separates the condition from the true value
// - : separates the true value from the false value
// - If condition is true → first value is returned
// - If condition is false → second value is returned


// 3. SIMPLE EXAMPLE

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result); // Adult


// 4. HOW IT WORKS
//
// age >= 18
//     ↓
// Is condition true?
//     ↓
// YES → "Adult"
// NO  → "Minor"


// 5. WHY USE IT?
// Use ternary when you have a SIMPLE condition
// and need to choose between TWO values.
//
// Example:

let isLoggedIn = true;

let message = isLoggedIn ? "Welcome" : "Please login";

console.log(message); // Welcome


// 6. TERNARY RETURNS A VALUE
// This is one of its main advantages.
//
// Example:

let marks = 75;

let grade = marks >= 40 ? "Pass" : "Fail";

console.log(grade); // Pass


// 7. YOU CAN USE IT INSIDE OTHER EXPRESSIONS

let age2 = 17;

console.log(age2 >= 18 ? "Can vote" : "Cannot vote");


// 8. NESTED TERNARY (POSSIBLE, BUT BE CAREFUL)
//
// You can put another ternary inside a ternary:
//
// let marks = 85;
//
// let grade = marks >= 90
//   ? "A"
//   : marks >= 80
//   ? "B"
//   : "C";
//
// This works, BUT it becomes difficult to read.
// Prefer if...else if...else when logic becomes complex.


// 9. IMPORTANT RULE
// Ternary is NOT a replacement for every if...else.
//
// GOOD:

let temperature = 30;
let weather = temperature > 25 ? "Hot" : "Cold";


// BAD / HARD TO READ:

// condition ? doSomething() : doSomethingElse();
//
// if the operations are large or complicated,
// use normal if...else instead.


// 10. DO'S
//
// ✓ Use for simple true/false decisions
// ✓ Use when choosing between two values
// ✓ Keep the condition easy to understand
// ✓ Use parentheses if they improve readability


// 11. DON'TS
//
// ✗ Don't use ternary for complicated logic
// ✗ Don't create deeply nested ternaries
// ✗ Don't sacrifice readability just to write fewer lines
// ✗ Don't use it when normal if...else is much clearer


// 12. QUICK RULE TO REMEMBER
//
// SIMPLE decision → Ternary
// COMPLEX decision → if...else
//
// Ternary = "condition ? true value : false value"