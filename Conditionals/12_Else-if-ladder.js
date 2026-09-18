// ========================================
// ELSE-IF LADDER IN JAVASCRIPT
// ========================================

// 1. What is an else-if ladder?
// ----------------------------------------
// An else-if ladder is used when we have to
// check MULTIPLE conditions one by one.
//
// JavaScript checks conditions from TOP to BOTTOM.
// As soon as one condition is TRUE,
// its block runs and the remaining conditions
// are skipped.


// 2. Basic Syntax
// ----------------------------------------

if (condition1) {
    // code
} else if (condition2) {
    // code
} else if (condition3) {
    // code
} else {
    // code when ALL conditions are false
}


// 3. Example
// ----------------------------------------

let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Output:
// Grade B


// 4. How does it work?
// ----------------------------------------
// marks = 75
//
// Condition 1: marks >= 90  → false
// Condition 2: marks >= 75  → true
//
// "Grade B" runs.
//
// JavaScript stops checking after finding
// the first TRUE condition.


// 5. Important Rule
// ----------------------------------------
// Conditions are checked from TOP → BOTTOM.
//
// Therefore, the ORDER of conditions matters.


// 6. Why use else-if ladder?
// ----------------------------------------
// Use it when you have MULTIPLE possible
// conditions and only ONE result should run.
//
// Common examples:
// - Grade calculation
// - Age categories
// - Salary ranges
// - Temperature levels
// - Login/status checks


// 7. Example: Age
// ----------------------------------------

let age = 25;

if (age < 13) {
    console.log("Child");
} else if (age < 20) {
    console.log("Teenager");
} else if (age < 60) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}

// Output:
// Adult


// 8. The final else is OPTIONAL
// ----------------------------------------
// You can write an else-if ladder without
// the final else.

let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
}

// If no condition is true,
// nothing will be printed.


// 9. Multiple else-if blocks are allowed
// ----------------------------------------
// You can have as many else-if conditions
// as your logic requires.
//
// Example:

if (condition1) {
    
} else if (condition2) {
    
} else if (condition3) {
    
} else if (condition4) {
    
} else {
    
}


// 10. Syntax Rules / Exceptions
// ----------------------------------------

// RULE 1:
// "else if" must come after an if or another
// else-if.

if (x > 10) {

} else if (x > 5) {

}


// RULE 2:
// You cannot start directly with else-if.

// ❌ Wrong:

else if (x > 5) {

}


// RULE 3:
// There can be only ONE final "else"
// in the same if-else chain.

// ❌ Wrong:

// if (x > 10) {

// } else {

// } else {

// }


// RULE 4:
// The final else must come LAST.

// ❌ Wrong:

// if (x > 10) {

// } else {

// } else if (x > 5) {

// }


// RULE 5:
// Every condition must produce true or false
// (a Boolean result).


// 11. DO's
// ----------------------------------------

// ✅ Put conditions in the correct order.
// ✅ Keep the most specific conditions first
//    when necessary.
// ✅ Use else-if when only one condition/result
//    should be selected.
// ✅ Use a final else when you want a default case.
// ✅ Keep conditions simple and readable.


// 12. DON'Ts
// ----------------------------------------

// ❌ Don't create unnecessary else-if conditions.
// ❌ Don't put a broad condition before a more
//    specific condition if it makes later conditions
//    unreachable.
//
// Example:

let marks = 95;

// ❌ Bad order:

if (marks >= 50) {
    console.log("Pass");
} else if (marks >= 90) {
    console.log("Excellent");
}

// "Excellent" can NEVER run,
// because 95 already satisfies marks >= 50.


// ✅ Better order:

if (marks >= 90) {
    console.log("Excellent");
} else if (marks >= 50) {
    console.log("Pass");
}


// 13. One-line definition to remember
// ----------------------------------------
// ELSE-IF LADDER:
// "Used to check multiple conditions one by one,
// and execute the first matching condition."
// ========================================