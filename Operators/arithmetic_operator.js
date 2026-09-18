/*
===========================================================
          JAVASCRIPT ARITHMETIC OPERATORS
===========================================================

| Operators | What it does              | Example       | Result |
|-----------|---------------------------|---------------|--------|
| +         | Addition                  | 10 + 3        | 13     |
| -         | Subtraction               | 10 - 3        | 7      |
| *         | Multiplication            | 10 * 3        | 30     |
| /         | Division                  | 10 / 3        | 3.333  |
| %         | Remainder (Modulus)       | 10 % 3        | 1      |
| **        | Exponentiation            | 10 ** 3       | 1000   |
| ++        | Increment by 1            | let x = 10; x++ | 11   |
| --        | Decrement by 1            | let x = 10; x-- | 9    |
------------------------------------------------------------------

===========================================================
          SOME RULES;
===========================================================

1. Use parentheses when you want to make the order clear.

   let result = (10 + 5) * 2;

2. Use meaningful variable names.

   let total = price + tax;

3. Use % when you need the remainder.

   let remainder = 10 % 3;  // 1

4. Remember that / can produce a decimal value.

   let result = 5 / 2;  // 2.5

5. Use ** for powers.

   let square = 5 ** 2;  // 25

6. Prefer ++ and -- when you clearly need to increase
   or decrease a variable by exactly 1.

   count++;
   count--;

7. Don't make complicated expressions without parentheses.

   Hard to read:
   a + b * c - d / e

   Better when grouping is intended:
   (a + b) * (c - d) / e
  

===========================================================
             IMPORTANT OPERATOR PRECEDENCE
===========================================================

Higher priority operators are evaluated first.
1. **        Exponentiation

2. *, /, %   Multiplication, Division, Remainder
-> When *, /, and % appear at the same level, JavaScript evaluates them from left to right.

3. +, -       Addition, Subtraction

NOTE - Parentheses can override all operators.

Example:
10 + 5 * 2
= 10 + 10
= 20

Use parentheses to change the order:

(10 + 5) * 2
= 15 * 2
= 30

===========================================================
*/

/*
===========================================================
        JAVASCRIPT ARITHMETIC PRACTICE (15 LEVELS)
        Operators: +, -, *, /, %, **, ++, --
===========================================================

LEVEL 1
---------------------------------
let a = 8;
let b = 2;
console.log(a + b);
// Output = ?


LEVEL 2
---------------------------------
let a = 15;
let b = 7;
console.log(a - b);
// Output = ?


LEVEL 3
---------------------------------
let a = 9;
let b = 4;
console.log(a * b);
// Output = ?


LEVEL 4
---------------------------------
let a = 20;
let b = 4;
console.log(a / b);
// Output = ?


LEVEL 5
---------------------------------
let a = 23;
let b = 5;
console.log(a % b);
// Output = ?


LEVEL 6
---------------------------------
console.log(2 ** 5);
// Output = ?


LEVEL 7
---------------------------------
console.log(10 + 6 * 2);
// Output = ?


LEVEL 8
---------------------------------
console.log((10 + 6) * 2);
// Output = ?


LEVEL 9
---------------------------------
console.log(24 / 4 * 3);
// Output = ?


LEVEL 10
---------------------------------
let x = 5;
console.log(x++);
// Output = ?
// Final value of x = ?


LEVEL 11
---------------------------------
let x = 5;
console.log(++x);
// Output = ?
// Final value of x = ?


LEVEL 12
---------------------------------
let x = 8;
let y = x++;
console.log(x);
console.log(y);
// Output of x = ?
// Output of y = ?


LEVEL 13
---------------------------------
let x = 8;
let y = ++x;
console.log(x);
console.log(y);
// Output of x = ?
// Output of y = ?


LEVEL 14
---------------------------------
let x = 5;
console.log(x++ + ++x);
// Output = ?
// Final value of x = ?


LEVEL 15 (TRICKY)
---------------------------------
let x = 10;
let y = x++ + ++x * 2 - x--;
console.log(x);
console.log(y);
// Output of x = ?
// Output of y = ?

===========================================================
RULE:
- Solve on paper first.
- Write x after every ++ or --.
- Then verify in VS Code.
===========================================================
*/

//Q. On a shopping website, calculate the total cost of a product when given the price per item (price = 150) and the quantity (quantity = 3). Also, calculate a 10% discount on the total cost and display the discounted price.
// let price_per_item = 150;
// let item_quantity = 3;
// let total_cost = price_per_item * item_quantity;
// let discount = total_cost * 0.10;
// let discounted_price = total_cost - discount;
// console.log("Price per item:",price_per_item);
// console.log("Quanity:",item_quantity);
// console.log("Total Cost:",total_cost);
// console.log("Discount:",discount);
// console.log("Discounted Price:",discounted_price);