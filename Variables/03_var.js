/*
========================
var Variable in JavaScript
========================

1. What is var?
----------------
var is a keyword used to create variables in JavaScript.

A variable is used to store data.

Example:
var name = "Sumit";

Here:
- var → keyword
- name → variable name
- "Sumit" → value stored inside variable


2. Why do we use variables?
----------------------------
Variables help us store and reuse data.

Example:
var age = 20;

console.log(age); // 20
console.log(age); // 20

Without variables, we would have to write values again and again.


3. How var works
-----------------
Example:

var city = "Delhi";
console.log(city);

Output:
Delhi

The value inside the variable gets printed.


4. var can be changed (reassigned)
-----------------------------------
Example:

var score = 50;
score = 80;

console.log(score);

Output:
80

Reason:
var allows changing the value later.


5. var can be declared again
------------------------------
Example:

var user = "Ram";
var user = "Shyam";

console.log(user);

Output:
Shyam

Reason:
var allows redeclaration.

This is dangerous because old data can accidentally be overwritten.


6. Scope of var (VERY IMPORTANT)
---------------------------------
var is FUNCTION SCOPED.

That means:
If var is created inside a function,
it can only be used inside that function.

Example:

function test(){
    var a = 10;
    console.log(a);
}

test();

console.log(a); // Error

Reason:
"a" exists only inside the function.


7. Problem with var in loops
-----------------------------
Example:

for(var i = 1; i <= 3; i++){
    console.log(i);
}

console.log(i);

Output:
1
2
3
4

Reason:
var does NOT respect block scope.
The variable still exists outside the loop.

This creates bugs in large projects.


8. var is HOISTED
------------------
JavaScript moves var declaration to the top internally.

Example:

console.log(a);

var a = 5;

Output:
undefined

Internally JavaScript sees it like this:

var a;
console.log(a);
a = 5;

Important:
Only declaration moves up,
NOT the value.


9. Where should var be used?
-----------------------------
In modern JavaScript:
Mostly NOT recommended.

Use:
- let → when value can change
- const → when value should not change

var is mainly seen in:
- old JavaScript code
- old projects
- old tutorials


10. Why developers avoid var
------------------------------
Problems with var:
- function scoped
- causes confusion in loops
- allows redeclaration
- easier to create bugs
- hoisting confusion

Because of these issues,
modern developers prefer let and const.


11. When can you still use var?
--------------------------------
You may see var:
- while reading old code
- in older interview questions
- in legacy projects

But in modern real-world projects:
let and const are standard.


12. Quick Comparison
---------------------

var
- function scoped
- can redeclare
- can reassign
- hoisted
- old way

let
- block scoped
- cannot redeclare
- can reassign
- modern way

const
- block scoped
- cannot redeclare
- cannot reassign
- safest and most used


13. Final Beginner Rule
------------------------
Use:
- const by default
- let when value changes
- avoid var in modern code

Simple rule:
Old JavaScript = var
Modern JavaScript = let + const
*/