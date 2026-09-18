// ========================================
// SWITCH STATEMENT — JAVASCRIPT
// ========================================

// 1. WHAT IS switch?
// switch is used when you want to compare ONE value
// with MULTIPLE possible values.

// Example:
// let day = 2;
//
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
// }
//
// Output: Tuesday


// 2. BASIC SYNTAX
//
// switch (expression) {
//   case value1:
//     // code
//     break;
//
//   case value2:
//     // code
//     break;
//
//   default:
//     // code
// }


// 3. HOW IT WORKS
// switch(expression) checks the expression against each case.
//
// It uses STRICT COMPARISON (===).
//
// Example:
// let x = 10;
//
// switch (x) {
//   case 10:
//     console.log("Matched");
//     break;
// }
//
// 10 === 10 → true → "Matched"


// 4. break
// break stops the switch after a matching case.
//
// Example:
// switch (2) {
//   case 1:
//     console.log("One");
//     break;
//   case 2:
//     console.log("Two");
//     break;
//   case 3:
//     console.log("Three");
//     break;
// }
//
// Output:
// Two
//
// Without break, JavaScript continues executing
// the next cases. This is called FALL-THROUGH.


// 5. default
// default runs when no case matches.
//
// Example:
// let day = 10;
//
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Invalid day");
// }
//
// Output: Invalid day
//
// default is optional.


// 6. IMPORTANT: case uses ===
// Type also matters.
//
// switch (10) {
//   case "10":
//     console.log("Matched");
//     break;
//   default:
//     console.log("Not matched");
// }
//
// Output: Not matched
//
// Because:
// 10 === "10" → false


// 7. MULTIPLE CASES CAN SHARE ONE CODE BLOCK
// Useful when multiple values should do the same thing.
//
// let day = "Saturday";
//
// switch (day) {
//   case "Saturday":
//   case "Sunday":
//     console.log("Weekend");
//     break;
//
//   default:
//     console.log("Weekday");
// }
//
// Output: Weekend


// 8. WHEN TO USE switch?
// Use switch when:
// - You have ONE value to check.
// - There are MANY fixed possible values.
// - Each value has a different action.
//
// Example:
// switch (role) {
//   case "admin":
//     // admin code
//     break;
//   case "user":
//     // user code
//     break;
//   case "guest":
//     // guest code
//     break;
// }


// 9. WHEN NOT TO USE switch?
// Don't use switch for complex conditions.
//
// Example:
// ❌ Don't use switch for:
//
// if (age >= 18 && age <= 60) {
//   ...
// }
//
// if / else is better for ranges and complex conditions.
//
// switch is mainly for FIXED VALUES.


// 10. DO'S
// ✅ Use break when you don't want fall-through.
// ✅ Use default when unmatched values are possible.
// ✅ Keep cases simple and readable.
// ✅ Remember that case comparison uses ===.


// 11. DON'TS
// ❌ Don't forget break accidentally.
// ❌ Don't use switch for complicated conditions.
// ❌ Don't assume "10" and 10 are the same.
// ❌ Don't create a huge switch with hundreds of cases
//    if another design would be clearer.


// 12. QUICK RULE TO REMEMBER
//
// ONE value + MANY FIXED OPTIONS → switch
//
// Example:
// switch (status) {
//   case "success":
//     ...
//     break;
//   case "error":
//     ...
//     break;
//   default:
//     ...
// }