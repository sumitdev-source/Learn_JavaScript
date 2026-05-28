// ==============================
// LET VARIABLE IN JAVASCRIPT
// ==============================

// "let" is used to create variables in JavaScript.
// A variable stores data/value.

// Example:
let name = "Sumit";


// ---------------------------------
// WHY "let" WAS INTRODUCED
// ---------------------------------

// Before ES6, developers mostly used "var".
// But "var" had many problems like:
// 1. Function scope confusion
// 2. Variable can be redeclared
// 3. Bugs inside loops and conditions

// To solve these issues, JavaScript introduced:
// 1. let
// 2. const


// ---------------------------------
// BASIC SYNTAX
// ---------------------------------

let age = 22;


// ---------------------------------
// VALUE CAN BE CHANGED
// ---------------------------------

let city = "Delhi";

city = "Kolkata";

console.log(city); // Kolkata

// "let" allows reassignment.


// ---------------------------------
// CANNOT REDECLARE IN SAME SCOPE
// ---------------------------------

let user = "Rahul";

// let user = "Aman"; ❌ Error

// This prevents accidental duplicate variables.


// ---------------------------------
// BLOCK SCOPE
// ---------------------------------

// "let" works only inside the block { }

// Example:

{
   let x = 10;
   console.log(x); // 10
}

// console.log(x); ❌ Error

// Outside the block, variable does not exist.


// ---------------------------------
// WHY BLOCK SCOPE IS IMPORTANT
// ---------------------------------

// It helps avoid bugs.

// Example with loop:

for(let i = 1; i <= 3; i++){
   console.log(i);
}

// console.log(i); ❌ Error

// "i" exists only inside loop.
// This keeps code clean and safe.


// ---------------------------------
// WHERE TO USE "let"
// ---------------------------------

// Use "let" when:
// 1. Value will change later
// 2. Inside loops
// 3. Temporary variables
// 4. Counters
// 5. Conditions

// Example:

let score = 0;

score = score + 10;


// ---------------------------------
// WHEN NOT TO USE "let"
// ---------------------------------

// If value should NEVER change,
// use "const" instead.

// Example:

const pi = 3.14;

// pi = 5 ❌ Error


// ---------------------------------
// LET VS VAR
// ---------------------------------

// let:
// ✔ Block scoped
// ✔ Safer
// ✔ Modern
// ✔ Cannot redeclare

// var:
// ❌ Function scoped
// ❌ Can create bugs
// ❌ Old style
// ❌ Can redeclare


// ---------------------------------
// COMMON BEGINNER MISTAKE
// ---------------------------------

// Thinking "let" and "const" are same.

// Difference:
// let  -> value can change
// const -> value cannot change


// ---------------------------------
// REAL LIFE EXAMPLE
// ---------------------------------

// Game score changes:
let gameScore = 0;

gameScore = 50;
gameScore = 100;


// User login status changes:
let isLoggedIn = false;

isLoggedIn = true;


// ---------------------------------
// SIMPLE RULE TO REMEMBER
// ---------------------------------

// Use:
// const -> by default
// let   -> when value changes
// avoid var


// ---------------------------------
// FINAL SUMMARY
// ---------------------------------

// let is a modern JavaScript variable keyword.
// It is block scoped.
// Its value can be changed.
// It cannot be redeclared in same scope.
// Mostly used when data changes later.