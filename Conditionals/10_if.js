/*
==================================================
IF STATEMENT IN JAVASCRIPT
==================================================

1. WHAT IS `if`?
--------------------------------------------------
`if` is used to run some code ONLY when a condition
is true.

Simple meaning:

    "If this condition is true, do this."

Example:
*/

if (age >= 18) {
    console.log("You can vote");
}

/*
Here:
- age >= 18  → condition
- { }        → block of code
- console.log → runs only if condition is true


==================================================
2. WHY DO WE USE `if`?
==================================================

We use `if` when our program needs to make a decision.

Example:
- If user is logged in → show dashboard
- If password is correct → allow login
- If marks >= 40 → student passes
- If cart has items → allow checkout


==================================================
3. BASIC SYNTAX
==================================================

if (condition) {
    // code to execute
}

RULE:
- Write `if`
- Put the condition inside `( )`
- Put the code inside `{ }`

Example:
*/

if (marks >= 40) {
    console.log("Pass");
}

/*
IMPORTANT:
The code inside `{ }` runs only when the condition
is true.


==================================================
4. HOW `if` WORKS
==================================================

JavaScript checks the condition.

        condition
            ↓
       Is it true?
        ↙       ↘
      YES        NO
       ↓          ↓
   run code    skip code

Example:
*/

let age = 20;

if (age >= 18) {
    console.log("Adult");
}

/*
age >= 18 → true

So output:
Adult


Example where condition is false:
*/

let age2 = 15;

if (age2 >= 18) {
    console.log("Adult");
}

/*
age2 >= 18 → false

So nothing is printed.


==================================================
5. RULES FOR WRITING `if`
==================================================

Rule 1: Condition must be inside parentheses
*/

if (age >= 18) {
    console.log("Adult");
}

/*
Rule 2: Put the code inside curly braces `{ }`
*/

if (age >= 18) {
    console.log("Adult");
}

/*
Rule 3: The condition must produce a true/false
result.

Example:
*/

if (10 > 5) {
    console.log("10 is greater");
}

/*
10 > 5 → true


==================================================
6. `if` WITH DIFFERENT CONDITIONS
==================================================

Comparison:
*/

if (age >= 18) {
    console.log("Adult");
}

/*
Equality:
*/

if (password === "1234") {
    console.log("Correct password");
}

/*
Multiple conditions using &&:
*/

if (age >= 18 && hasID === true) {
    console.log("Allowed");
}

/*
Multiple conditions using ||:
*/

if (isAdmin || isOwner) {
    console.log("Access granted");
}


/*
==================================================
7. `if` WITH VARIABLES
==================================================
*/

let temperature = 35;

if (temperature > 30) {
    console.log("It is hot");
}

/*
This is very common.

Variable → condition → decision


==================================================
8. `if` WITH BOOLEAN
==================================================
*/

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Show dashboard");
}

/*
This is cleaner than:

if (isLoggedIn === true)

Because a boolean variable already contains
true/false.

Both work, but the first style is preferred.


==================================================
9. `if` WITH FUNCTIONS
==================================================
*/

function checkAge(age) {

    if (age >= 18) {
        console.log("Adult");
    }
}

checkAge(20);


/*
==================================================
10. DO'S
==================================================

✓ Use `if` when you need to make a decision.

✓ Keep the condition simple and readable.

✓ Use `{ }` even when there is only one line.
*/

if (age >= 18) {
    console.log("Adult");
}

/*
✓ Use `===` when checking equality.

Good:
*/

if (age === 18) {
    console.log("Exactly 18");
}


/*
==================================================
11. DON'TS
==================================================

✗ Don't use `=` when you want to compare values.

Wrong:
*/

if (age = 18) {
    console.log("18");
}

/*
`=` means assignment.

Use:
*/

if (age === 18) {
    console.log("18");
}


/*
✗ Don't write complicated conditions unnecessarily.

Bad:
*/

if (age >= 18 && age <= 60 && hasID === true && isBlocked === false) {
    console.log("Allowed");
}

/*
This can become difficult to understand.

For beginners, keep conditions readable.


✗ Don't forget the parentheses.

Wrong:

if age >= 18 {
    console.log("Adult");
}

Correct:
*/

if (age >= 18) {
    console.log("Adult");
}


/*
==================================================
12. WHEN SHOULD I USE `if`?
==================================================

Use `if` when:

→ Something should happen only under a condition.

Examples:

1. Login
*/

if (isLoggedIn) {
    console.log("Open dashboard");
}

/*
2. Age verification
*/

if (age >= 18) {
    console.log("Allow access");
}

/*
3. Payment
*/

if (paymentSuccessful) {
    console.log("Order confirmed");
}

/*
4. Form validation
*/

if (email === "") {
    console.log("Email is required");
}


/*
==================================================
13. IMPORTANT POINT TO REMEMBER
==================================================

`if` does NOT automatically run something when
the condition is false.

Example:
*/

let marks = 30;

if (marks >= 40) {
    console.log("Pass");
}

/*
Because the condition is false, JavaScript simply
skips the block.

`if` basically means:

    IF condition is true
        → execute this code
    OTHERWISE
        → do nothing


==================================================
14. ONE-LINE MEMORY TRICK
==================================================

if = "Run this code only when this condition is true."


==================================================
15. BEGINNER PRACTICE
==================================================

Try these yourself:

Q1.
Create a variable `age`.
If age is 18 or more, print:
"You are eligible."

Q2.
Create a variable `marks`.
If marks are 40 or more, print:
"Pass."

Q3.
Create a variable `isLoggedIn`.
If it is true, print:
"Welcome."

Q4.
Create a variable `number`.
If number is greater than 10, print:
"Greater than 10."

Q5.
Create a variable `password`.
If password is exactly `"admin123"`, print:
"Login successful."
*/