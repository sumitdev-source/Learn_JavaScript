/*
==================================================
        NESTED IF STATEMENTS — JAVASCRIPT
==================================================

1. WHAT IS A NESTED IF?
--------------------------------------------------
A nested if means:

    An `if` statement written INSIDE another `if`
    statement.

Simple idea:

    if (condition1) {
        if (condition2) {
            // code
        }
    }

The inner `if` is checked only when the outer
`if` condition is true.


2. BASIC SYNTAX
--------------------------------------------------

if (condition1) {

    if (condition2) {
        // code
    }

}

RULE:
- Outer `if` comes first.
- Inner `if` must be inside `{ }` of the outer `if`.
- Each `if` has its own condition.
- Each `if` can have its own `{ }` block.


3. SIMPLE EXAMPLE
--------------------------------------------------

let age = 20;
let hasLicense = true;

if (age >= 18) {

    if (hasLicense) {
        console.log("You can drive.");
    }

}

HOW IT WORKS:

Step 1 → Check: age >= 18
         true

Step 2 → Enter outer if.

Step 3 → Check: hasLicense
         true

Step 4 → Print "You can drive."


4. IMPORTANT RULE
--------------------------------------------------
The inner `if` does NOT run if the outer `if`
condition is false.

Example:

let age = 16;
let hasLicense = true;

if (age >= 18) {

    if (hasLicense) {
        console.log("You can drive.");
    }

}

Nothing is printed.

Why?
Because `age >= 18` is false, so JavaScript
never reaches the inner `if`.


5. WHEN AND WHY USE NESTED IF?
--------------------------------------------------
Use nested `if` when one condition depends on
another condition.

Example:

if (userLoggedIn) {

    if (isAdmin) {
        console.log("Show admin panel");
    }

}

Meaning:

    First → Is the user logged in?
    Then  → Is the user an admin?

The second check only makes sense after the
first check passes.


6. NESTED IF WITH ELSE
--------------------------------------------------

if (age >= 18) {

    if (hasLicense) {
        console.log("Can drive");
    } else {
        console.log("Get a license first");
    }

} else {
    console.log("Too young to drive");
}


7. NESTING MORE THAN ONE LEVEL
--------------------------------------------------
You CAN nest multiple levels:

if (condition1) {

    if (condition2) {

        if (condition3) {
            // code
        }

    }

}

BUT:

Too much nesting makes code difficult to read.


8. DO'S
--------------------------------------------------
✓ Use nested if when the second condition depends
  on the first condition.

✓ Use `{ }` to clearly define each block.

✓ Keep nesting shallow when possible.

✓ Use meaningful conditions.


9. DON'TS
--------------------------------------------------
✗ Don't nest `if` unnecessarily.

Bad:

if (age >= 18) {
    if (age >= 18) {
        console.log("Adult");
    }
}

The second condition is unnecessary.

Better:

if (age >= 18) {
    console.log("Adult");
}


10. NESTED IF vs SEPARATE IF
--------------------------------------------------

Nested:

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Admin");
    }
}

Meaning:
"Check admin ONLY if logged in."


Separate:

if (isLoggedIn) {
    console.log("Logged in");
}

if (isAdmin) {
    console.log("Admin");
}

Meaning:
"Check both conditions independently."


11. GOLDEN RULE
--------------------------------------------------
Nested IF =

    "First condition must pass,
     then check the next condition."

Think of it like:

    Door 1 → Door 2 → Access

If Door 1 is locked,
you never reach Door 2.

==================================================
*/