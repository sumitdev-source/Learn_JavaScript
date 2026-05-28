// ==========================
// const Variable in JavaScript
// ==========================


// -----------------------------------
// What is const ?
// -----------------------------------

// const is used to create a variable
// whose value should NOT be changed later.

// Think of it like a fixed label.

// Example:
const name = "Sumit";

console.log(name);


// -----------------------------------
// Why do we use const ?
// -----------------------------------

// We use const when the value should stay fixed.

// This makes code:
// 1. Safer
// 2. Easier to understand
// 3. Less buggy

// If someone accidentally changes the value,
// JavaScript will throw an error.


// Example:
const country = "India";

// country = "USA"; ❌ Error
// because const values cannot be reassigned



// -----------------------------------
// Important Rule
// -----------------------------------

// const must get a value immediately.

// Correct:
const age = 22;

// Wrong:
// const age; ❌ Error



// -----------------------------------
// Reassign vs Modify
// -----------------------------------

// Beginners get confused here.

// "Reassign" means giving completely new value.
// "Modify" means changing data inside object/array.


// -----------------------------------
// Primitive values cannot change
// -----------------------------------

const score = 100;

// score = 200; ❌ Not allowed



// -----------------------------------
// Arrays with const
// -----------------------------------

// Array itself cannot be replaced,
// but items inside array can change.

const fruits = ["Apple", "Mango"];

fruits.push("Banana"); // ✅ Allowed

console.log(fruits);


// fruits = ["Orange"]; ❌ Not allowed



// -----------------------------------
// Objects with const
// -----------------------------------

// Object reference is fixed,
// but properties can change.

const user = {
    name: "Sumit",
    age: 22
};

user.age = 23; // ✅ Allowed

console.log(user);


// user = {}; ❌ Not allowed



// -----------------------------------
// Where should we use const ?
// -----------------------------------

// Use const by default in modern JavaScript.

// Use it for:
// - Names
// - API URLs
// - Arrays
// - Objects
// - Functions
// - Fixed values
// - Configuration data


// Example:
const PI = 3.14;

const colors = ["red", "blue"];

const student = {
    name: "Rahul"
};



// -----------------------------------
// When NOT to use const ?
// -----------------------------------

// If value needs to change later,
// use let instead.

let marks = 50;

marks = 80; // ✅ Allowed



// -----------------------------------
// const inside loops
// -----------------------------------

// const works in "for...of" and "for...in"
// because a new variable is created each loop.

for (const item of ["A", "B", "C"]) {
    console.log(item);
}


// But normal counter loops usually use let.

for (let i = 0; i < 5; i++) {
    console.log(i);
}



// -----------------------------------
// Why modern developers prefer const ?
// -----------------------------------

// Because it prevents accidental changes.

// Good developers usually:
// 1. Use const first
// 2. Use let only when value changes
// 3. Avoid var



// -----------------------------------
// Simple Real-Life Analogy
// -----------------------------------

// const = permanent marker
// let   = pencil
// var   = old broken tool



// -----------------------------------
// Final Rule to Remember
// -----------------------------------

// Use const when value should stay fixed.
// Use let when value will change.
// Avoid var in modern JavaScript.


// ==========================
// Reassign vs Modify
// ==========================


// -----------------------------------
// 1. Reassign
// -----------------------------------

// Reassign means:
// giving a completely NEW value
// to the variable.

const user = {
    name: "Sumit"
};

// user = { name: "Rahul" }; ❌ Error

// Why error?
// Because const does not allow
// assigning a completely new object.



// Think like this:
//
// OLD object  ---> replaced by NEW object
//
// const does NOT allow replacement.




// -----------------------------------
// 2. Modify
// -----------------------------------

// Modify means:
// changing data INSIDE the object/array,
// not replacing the whole object.

const student = {
    name: "Sumit",
    age: 22
};

student.age = 23; // ✅ Allowed

console.log(student);


// Why allowed?
// Because object itself is same.
// Only internal value changed.




// -----------------------------------
// Array Example
// -----------------------------------

const fruits = ["Apple", "Mango"];


// MODIFYING array
fruits.push("Banana"); // ✅ Allowed

console.log(fruits);



// REASSIGNING array
// fruits = ["Orange"]; ❌ Error



// -----------------------------------
// Easy Analogy
// -----------------------------------

// const is like a house address.

// Reassign:
// changing entire house ❌

// Modify:
// changing furniture inside house ✅