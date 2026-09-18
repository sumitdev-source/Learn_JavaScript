// ========================================
// IF-ELSE IN JAVASCRIPT — BEGINNER NOTES
// ========================================

// 1. WHAT IS IF-ELSE?
// if-else is used to make a decision in a program.
//
// "If this condition is true → do this"
// "Otherwise → do that"

// Example:
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}


// 2. BASIC SYNTAX
//
// if (condition) {
//     // code runs when condition is true
// } else {
//     // code runs when condition is false
// }
//
// IMPORTANT:
// - Write the condition inside ( )
// - Write the code inside { }
// - else does NOT have a condition
// - Do not put ; after the condition before { }


// 3. HOW IT WORKS
//
// JavaScript checks the condition.
//
// TRUE  → executes the if block
// FALSE → skips if and executes the else block

let age = 20;

if (age >= 18) {
    console.log("Adult");       // runs
} else {
    console.log("Minor");       // does not run
}


// 4. CONDITION MUST GIVE TRUE OR FALSE
//
// Usually we use comparison operators:
//
// >    greater than
// <    less than
// >=   greater than or equal to
// <=   less than or equal to
// ===  exactly equal to
// !==  not exactly equal to

let marks = 70;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// 5. WHY AND WHEN DO WE USE IF-ELSE?
//
// Use if-else when your program needs to choose
// between TWO possibilities.
//
// Examples:
// - Login successful / unsuccessful
// - Pass / fail
// - Adult / minor
// - Available / unavailable
// - Valid / invalid


// 6. ELSE IS OPTIONAL
//
// If you only care about the TRUE condition,
// you can use if without else.

let temperature = 35;

if (temperature > 30) {
    console.log("It is hot");
}


// 7. MULTIPLE CONDITIONS
//
// You can use logical operators inside if:
//
// &&  → AND
// ||  → OR
// !   → NOT

let age = 25;
let hasID = true;

if (age >= 18 && hasID === true) {
    console.log("Entry allowed");
} else {
    console.log("Entry denied");
}


// 8. DO'S
//
// ✓ Use === instead of == in most cases.
// ✓ Keep the condition simple and readable.
// ✓ Use braces { } even for one-line blocks.
// ✓ Use if-else when there are two possible outcomes.


// 9. DON'TS
//
// ✗ Don't write:
// if age >= 18 {
// }
//
// ✓ Correct:
// if (age >= 18) {
// }


// ✗ Don't write:
// if (age >= 18); {
//     console.log("Adult");
// }
//
// The ; ends the if statement.
//
// ✓ Correct:
// if (age >= 18) {
//     console.log("Adult");
// }


// ✗ Avoid == when you want exact comparison:
//
// if (age == "18")   // avoid
//
// ✓ Prefer:
// if (age === 18)


// 10. IMPORTANT EXCEPTION — TRUTHY/FALSY
//
// JavaScript can treat non-boolean values as true/false.
//
// Falsy values include:
// false
// 0
// ""
// null
// undefined
// NaN
//
// Example:

let username = "";

if (username) {
    console.log("Username exists");
} else {
    console.log("Username is empty");
}


// QUICK RULE TO REMEMBER:
//
// if     → condition is TRUE
// else   → condition is FALSE
//
// if (condition) {
//     // TRUE
// } else {
//     // FALSE
// }