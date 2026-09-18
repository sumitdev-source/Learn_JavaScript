/*
==================================================
DO...WHILE LOOP — JAVASCRIPT NOTES
==================================================

1. WHAT IS A DO...WHILE LOOP?
--------------------------------------------------
A do...while loop is used to repeat a block of code.

IMPORTANT:
The code runs AT LEAST ONCE, even if the condition
is false.


2. BASIC SYNTAX
--------------------------------------------------

do {
    // code to execute
} while (condition);


3. HOW IT WORKS
--------------------------------------------------

Step 1 → Run the code inside `do`
Step 2 → Check the condition
Step 3 → If condition is true → run again
Step 4 → If condition is false → stop


4. SIMPLE EXAMPLE
--------------------------------------------------

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

Output:
1
2
3
4
5

Here:
- `i = 1` → starting value
- `do {}` → code that runs
- `i++` → changes the value
- `i <= 5` → condition


5. WHY USE DO...WHILE?
--------------------------------------------------

Use it when you want the code to execute
AT LEAST ONCE before checking the condition.

Example:

let number = 10;

do {
    console.log("Hello");
} while (number < 5);

Output:
Hello

Even though `10 < 5` is false,
"Hello" is printed once.

This is the main difference between `while`
and `do...while`.


6. WHILE vs DO...WHILE
--------------------------------------------------

while:

let i = 10;

while (i < 5) {
    console.log(i);
}

Output:
Nothing

Because the condition is checked FIRST.


do...while:

let i = 10;

do {
    console.log(i);
} while (i < 5);

Output:
10

Because the code runs FIRST, then the condition
is checked.


7. RULES FOR WRITING
--------------------------------------------------

Rule 1:
Write the code inside `do { }`.

Rule 2:
Write the condition after `while`.

Rule 3:
Do NOT forget the semicolon after `while(condition);`

Rule 4:
Make sure something changes inside the loop,
otherwise you may create an infinite loop.


8. DO'S ✅
--------------------------------------------------

✓ Use do...while when the code must run at least once.

✓ Update the loop variable when necessary.

Example:

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);


✓ Keep the condition easy to understand.


9. DON'TS ❌
--------------------------------------------------

✗ Don't use do...while when you don't want the
  code to run even once.

✗ Don't forget to update the variable.

Example:

let i = 1;

do {
    console.log(i);
} while (i <= 5);

This creates an INFINITE LOOP because `i`
never changes.


✗ Don't use do...while just because you can.
  If a normal `for` loop or `while` loop is clearer,
  use that instead.


10. REAL USE CASE
--------------------------------------------------

A common use case is asking the user for input
at least once.

Example:

let password;

do {
    password = prompt("Enter your password");
} while (password !== "1234");

The user is asked at least once.

If the password is wrong → ask again.
If the password is correct → stop.


11. QUICK MEMORY TRICK
--------------------------------------------------

WHILE:
    Check → Run

DO...WHILE:
    Run → Check


12. WHEN TO USE?
--------------------------------------------------

Use DO...WHILE when:

"First do something, then decide whether
to repeat it."

Example:
- Ask for input at least once
- Show a menu at least once
- Take user input until it is valid


13. INTERVIEW POINT
--------------------------------------------------

Q: What is the main difference between while
   and do...while?

Answer:

A `while` loop checks the condition before
executing the code, so it can execute zero times.

A `do...while` loop executes the code first and
checks the condition afterward, so it always
executes at least once.

==================================================
*/