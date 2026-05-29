//Story of console.log() Complete Notes

/// ======================================================
// 01. WHAT IS console.log() ?
// ======================================================

// console.log() is used to print/output something into the console.

// Console = a place where developers can see output, errors, messages, and debug programs.

// Syntax: console.log(value);


/*
// ======================================================
// 02. BASIC EXAMPLE
// ======================================================

// Try it yourself
console.log("Hello World");

// Output:
// Hello World
*/


// ======================================================
// 03. WHY WE USE console.log()
// ======================================================

// 1. To check values
// 2. To understand code flow
// 3. To debug errors
// 4. To test logic
// 5. To learn JavaScript better


/*
// ======================================================
// 04. PRINT STRING (TEXT)
// ======================================================

// String = text written inside quotes.

console.log("JavaScript");
console.log('Frontend');
console.log(`Backend`);

// Output:
// JavaScript
// Frontend
// Backend
*/


/*
// ======================================================
// 05. DIFFERENCE BETWEEN "", '', ``
// ======================================================

// "" -> Double quotes
// '' -> Single quotes
// `` -> Backticks (Template Literals)

// Double and single quotes are mostly same.

console.log("Hello");
console.log('Hello');

// Backticks allow variable insertion and multiline text.

let name = "Sumit";

console.log(`Hello ${name}`);

// Output:
// Hello Sumit
*/


/*
// ======================================================
// 06. PRINT NUMBERS
// ======================================================

console.log(10);
console.log(99.5);

// Output:
// 10
// 99.5
*/


/*
// ======================================================
// 07. PRINT VARIABLES
// ======================================================

// Variable = container that stores data.

let userName = "Sumit";

console.log(userName);

// Output:
// Sumit


// Important Difference:

console.log("userName");

// Output:
// userName

// Because it is treated as text.

console.log(userName);

// Output:
// Sumit

// Because it prints variable value.
*/


/*
// ======================================================
// 08. PRINT MULTIPLE VALUES
// ======================================================

let age = 22;

console.log(userName, age);

// Output:
// Sumit 22

// JavaScript automatically adds spaces.
*/


/*
// ======================================================
// 09. PRINT EXPRESSIONS
// ======================================================

// Expression = calculation or operation.

console.log(10 + 20);

// Output:
// 30

let a = 5;
let b = 10;

console.log(a + b);

// Output:
// 15
*/


// ======================================================
// 10. PRINT BOOLEAN VALUES
// ======================================================

// Boolean = true or false.

console.log(true);
console.log(false);

// Output:
// true
// false


// ======================================================
// 11. PRINT ARRAYS
// ======================================================

// Array = collection of multiple values.

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

// Output:
// ["Apple", "Banana", "Mango"]


// ======================================================
// 12. PRINT OBJECTS
// ======================================================

// Object = stores data in key-value pairs.

let user = {
    name: "Sumit",
    age: 22
};

console.log(user);

// Output:
// {name: "Sumit", age: 22}


// ======================================================
// 13. console.table()
// ======================================================

// console.table() displays data in table form.

let students = [
    {name: "Rahul", age: 20},
    {name: "Aman", age: 21}
];

console.table(students);


// ======================================================
// 14. MESSAGE + VARIABLE TOGETHER
// ======================================================


// ------------------------------------------------------
// 14.1 Method 1 -> Using comma
// ------------------------------------------------------

console.log("Age is", age);

// Output:
// Age is 22


// ------------------------------------------------------
// 14.2 Method 2 -> Using +
// ------------------------------------------------------

console.log("Age is " + age);

// Output:
// Age is 22


// ------------------------------------------------------
// 14.3 Method 3 -> Template Literals (Best Modern Way)
// ------------------------------------------------------

console.log(`Age is ${age}`);

// Output:
// Age is 22


// ======================================================
// 15. typeof OPERATOR
// ======================================================

// typeof is used to check datatype.

console.log(typeof "Hello");

// Output:
// string

console.log(typeof 10);

// Output:
// number

console.log(typeof true);

// Output:
// boolean

console.log(typeof []);

// Output:
// object

console.log(typeof {});

// Output:
// object


// ======================================================
// 16. CHECK CODE FLOW
// ======================================================

// console.log() helps understand execution order.

console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// Output:
// Step 1
// Step 2
// Step 3


// ======================================================
// 17. console.log() INSIDE CONDITIONS
// ======================================================

let marks = 80;

if(marks >= 40){

    // --------------------------------------------------
    // 17.1 Print Message if Condition is True
    // --------------------------------------------------

    console.log("Pass");
}

// Output:
// Pass


// ======================================================
// 18. console.log() INSIDE LOOPS
// ======================================================

// Loop = repeats code multiple times.

for(let i = 1; i <= 5; i++){

    // --------------------------------------------------
    // 18.1 Print Current Loop Value
    // --------------------------------------------------

    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5


// ======================================================
// 19. DEBUGGING
// ======================================================

// Debugging = finding and fixing errors.

// console.log() is heavily used for debugging.

let x = 10;
let y = 20;


// ------------------------------------------------------
// 19.1 Check Value of x
// ------------------------------------------------------

console.log(x);


// ------------------------------------------------------
// 19.2 Check Value of y
// ------------------------------------------------------

console.log(y);


// ------------------------------------------------------
// 19.3 Check Result of x + y
// ------------------------------------------------------

console.log(x + y);

// Helps check whether values are correct.


// ======================================================
// 20. console.error()
// ======================================================

// Used to display error messages.

console.error("Something went wrong");

// Usually shown in red color.


// ======================================================
// 21. console.warn()
// ======================================================

// Used to display warning messages.

console.warn("Warning!");

// Usually shown in yellow color.


// ======================================================
// 22. console.clear()
// ======================================================

// Clears console output.

console.clear();


// ======================================================
// 23. console.count()
// ======================================================

// Counts how many times code runs.


// ------------------------------------------------------
// 23.1 First Count
// ------------------------------------------------------

console.count("Counter");


// ------------------------------------------------------
// 23.2 Second Count
// ------------------------------------------------------

console.count("Counter");


// ------------------------------------------------------
// 23.3 Third Count
// ------------------------------------------------------

console.count("Counter");

// Output:
// Counter: 1
// Counter: 2
// Counter: 3

/*
// ======================================================
// 24. console.time() and console.timeEnd()
// ======================================================

// Used to measure execution time.

console.time("test");

for(let i = 1; i <= 1000000; i++){

}

console.timeEnd("test");

// Output example:
// test: 5ms
*/

/*
// ======================================================
// 25. %c STYLING
// ======================================================

// Used to style console text.

console.log("%cHello", "color:red; font-size:20px");
*/

/*
// ======================================================
// 26. COMMON BEGINNER MISTAKES
// ======================================================


// ------------------------------------------------------
// 26.1 Mistake 1
// ------------------------------------------------------

console.log(myName);

// Error:
// ReferenceError

// Because variable is not declared.


// ------------------------------------------------------
// 26.2 Mistake 2
// ------------------------------------------------------

// Wrong:
console.log = ("Hello");

// Correct:
console.log("Hello");

// Because log() is a function.


// ------------------------------------------------------
// 26.3 Mistake 3
// ------------------------------------------------------

console.log("Age is " + 10 + 5);

// Output:
// Age is 105

// Because strings join together.


// Correct Way:

console.log("Age is", 10 + 5);

// Output:
// Age is 15


// Or:

console.log(`Age is ${10 + 5}`);

// Output:
// Age is 15

*/


// ======================================================
// 27. WHERE CONSOLE OUTPUT APPEARS
// ======================================================

// Browser:
// Press F12
// Open Console Tab

// VS Code:
// Open Terminal
// Run:
// node filename.js

/*
// ======================================================
// 28. INTERNAL WORKING
// ======================================================

// console = object

// log() = method/function inside console object

// So:

console.log("Hello");

// Means:

// Use log() function from console object.


// Similar Examples:

Math.random();

array.push();

string.includes();

*/

/*
// ======================================================
// 29. REAL MEANING OF console.log()
// ======================================================

// console.log() means:

// "Show me what is happening inside my code."

*/

/*
// ======================================================
// 30. MOST IMPORTANT USE
// ======================================================

// Beginners think console.log() is only for printing.

// Wrong.

// Biggest real use:
// Debugging and understanding program flow.


// ======================================================
// 31. SHORT REVISION NOTES
// ======================================================

// console.log() -> prints output

// console.error() -> shows errors

// console.warn() -> shows warnings

// console.table() -> displays table

// console.clear() -> clears console

// console.count() -> counts executions

// console.time() -> measures execution time

// typeof -> checks datatype

// console.log() is mainly used for:
// debugging + understanding code.
*/
