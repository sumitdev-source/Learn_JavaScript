/*
==================================================
WHILE LOOP IN JAVASCRIPT
==================================================

1. WHAT IS A WHILE LOOP?
--------------------------------------------------
A while loop repeats a block of code as long as
a given condition is TRUE.

Simple meaning:
"Jab tak condition true hai, code repeat karo."


2. BASIC SYNTAX
--------------------------------------------------

while (condition) {
    // code to repeat
}

Example:

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

Output:
1
2
3
4
5


3. HOW IT WORKS
--------------------------------------------------
Step 1: Check the condition.
Step 2: If condition is TRUE → run the code.
Step 3: Update the value.
Step 4: Check the condition again.
Step 5: Stop when condition becomes FALSE.

Example:

let i = 1;

while (i <= 3) {
    console.log(i);
    i++;
}

Flow:

i = 1 → 1 <= 3 → print 1
i = 2 → 2 <= 3 → print 2
i = 3 → 3 <= 3 → print 3
i = 4 → 4 <= 3 ❌ → STOP


4. WHY DO WE USE WHILE LOOP?
--------------------------------------------------
Use while when you want to repeat something,
but you don't necessarily know in advance
how many times it will run.

Example:

let password = "";

while (password !== "1234") {
    password = getPassword();
}

Here, we don't know how many attempts the user
will need.

The loop continues until the condition becomes false.


5. WHEN TO USE WHILE LOOP?
--------------------------------------------------
Use while when:

✓ The number of repetitions is unknown.
✓ The loop depends on a condition.
✓ You want to continue until something happens.

Example:

let count = 10;

while (count > 0) {
    console.log(count);
    count--;
}

Useful for situations like:
- Waiting for a condition
- Processing data until finished
- User input validation
- Repeating an operation until success


6. IMPORTANT RULE
--------------------------------------------------
A while loop should normally have something
that changes the condition.

Example:

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;              // condition-changing step
}

If you don't change i, the condition stays TRUE.


7. INFINITE LOOP
--------------------------------------------------
If the condition never becomes FALSE,
the loop runs forever.

❌ Bad:

let i = 1;

while (i <= 5) {
    console.log(i);
}

Why?
Because i never changes.

i is always 1.
So 1 <= 5 is always TRUE.

This is called an INFINITE LOOP.


8. DO'S
--------------------------------------------------
✓ Make sure the condition can eventually become FALSE.

✓ Update the variable used in the condition.

✓ Keep the loop condition easy to understand.

✓ Use while when the number of iterations
  is not known beforehand.


9. DON'TS
--------------------------------------------------
❌ Don't forget to update the loop variable.

❌ Don't create a condition that can never become FALSE.

❌ Don't use while when a simple for loop is
   clearly better.

Example:

// Better with for loop when repetitions are known

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

Instead of:

let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}


10. WHILE vs FOR
--------------------------------------------------

Use FOR:
→ When you know how many times to repeat.

Example:
"Print numbers from 1 to 10."

Use WHILE:
→ When you don't know how many times
  you need to repeat.

Example:
"Keep asking for password until it is correct."


11. WHILE WITH AN ARRAY
--------------------------------------------------

let numbers = [10, 20, 30];

let i = 0;

while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

Output:
10
20
30


12. KEY THING TO REMEMBER
--------------------------------------------------

while = "Repeat WHILE this condition is TRUE."

Syntax:

while (condition) {
    // repeated code
    // update condition
}

Think:

CHECK → RUN → UPDATE → CHECK → RUN → UPDATE
                         ↓
                    condition false
                         ↓
                        STOP
==================================================
*/