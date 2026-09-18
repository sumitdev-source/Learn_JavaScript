/*
==================================================
FOR LOOP IN JAVASCRIPT — BEGINNER NOTES
==================================================

1. WHAT IS A FOR LOOP?
--------------------------------------------------
A for loop is used to repeat a block of code multiple
times.

Instead of writing the same code again and again,
we use a loop.

Example:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

Output:
1
2
3
4
5


2. WHY DO WE USE FOR LOOP?
--------------------------------------------------
Use a for loop when you know:
- How many times you want to repeat something.
- Or you want to move through an array/string using an index.

Example:

for (let i = 0; i < 5; i++) {
    console.log("Hello");
}

"Hello" will print 5 times.


3. HOW DOES FOR LOOP WORK?
--------------------------------------------------
Syntax:

for (initialization; condition; update) {
    // code
}

Example:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

Step-by-step:

let i = 1       → Start
i <= 5          → Check condition
console.log(i)  → Run code
i++             → Increase i

Then the condition is checked again.

1 → 2 → 3 → 4 → 5 → Stop


4. THE 3 PARTS OF FOR LOOP
--------------------------------------------------

A) Initialization
   Runs only ONCE at the beginning.

   let i = 1;


B) Condition
   Checked before every iteration.

   i <= 5

   If true → loop runs.
   If false → loop stops.


C) Update
   Runs after each iteration.

   i++

   Other examples:
   i--
   i = i + 2
   i += 2


5. IMPORTANT: INDEX STARTS FROM 0
--------------------------------------------------
Arrays usually start from index 0.

Example:

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango
console.log(fruits[2]); // Banana

To loop through the array:

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

Output:
Apple
Mango
Banana


6. WHEN SHOULD YOU USE FOR LOOP?
--------------------------------------------------

Use for loop when:

✓ You know the number of repetitions.

Example:

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


✓ You need the INDEX of an array.

Example:

let names = ["A", "B", "C"];

for (let i = 0; i < names.length; i++) {
    console.log(i, names[i]);
}

Output:
0 A
1 B
2 C


✓ You want to skip elements.

Example:

for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

Output:
0
2
4
6
8


7. WHEN SHOULD YOU NOT USE FOR LOOP?
--------------------------------------------------

Don't automatically use for loop for everything.

If you only need the values of an array and don't
need the index, for...of is usually easier.

Example:

let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
    console.log(fruit);
}

Instead of:

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


8. DO'S
--------------------------------------------------

✓ Use meaningful variable names when appropriate.

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}


✓ Use i for a simple index.

for (let i = 0; i < 5; i++) {
    console.log(i);
}


✓ Use < array.length when starting from 0.

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


✓ Make sure your update moves the loop toward
  the stopping condition.


9. DON'TS
--------------------------------------------------

✗ Don't forget the update.

Wrong:

for (let i = 0; i < 5;) {
    console.log(i);
}

This can create an infinite loop because i never
changes.


✗ Don't use the wrong condition.

Wrong:

for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i]);
}

Usually use:

i < fruits.length

Because the last valid index is length - 1.


✗ Don't make complicated loops unnecessarily.

If a simple loop can solve the problem, keep it simple.


10. BREAK
--------------------------------------------------
break stops the loop immediately.

Example:

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}

Output:
1
2
3
4

When i becomes 5, the loop stops.


11. CONTINUE
--------------------------------------------------
continue skips the current iteration and moves to
the next iteration.

Example:

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}

Output:
1
2
4
5


12. SIMPLE REAL-WORLD USE CASE
--------------------------------------------------
Suppose you have marks of 5 students and want to
print each mark.

let marks = [80, 75, 90, 65, 88];

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}


13. QUICK RULE TO REMEMBER
--------------------------------------------------

for loop = "Repeat something while a condition is true."

Basic pattern:

for (let i = 0; i < something.length; i++) {
    // use something[i]
}

For arrays, remember:

START → 0
CONDITION → i < array.length
ACCESS → array[i]
UPDATE → i++

==================================================
*/