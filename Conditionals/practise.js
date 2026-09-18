//1. Give choice to the user to select theme color and set the selected theme color and console it.
/*
let color = 'light';
let theme = prompt("Enter the theme name: (light, dark, green, pink)");
if(theme === 'light'){
  color = 'white';
} else if(theme === 'dark'){
  color = 'black';
} else if(theme === 'green') {
  color = 'green';
} else if(theme === 'pink') {
  color = 'pink';
}

if(theme !== 'light' && theme !== 'dark' && theme !== 'green' && theme !== 'pink') {
  alert("invalid color");
} else {
  alert(`Your theme is ${theme}, and your color is ${color}`);
}
*/

//2. Find the smallest of three numbers. Numbers are given by the user.
/*
let num1 = Number(prompt("Enter no. 1: "));
let num2 = Number(prompt("Enter no. 2: "));
let num3 = Number(prompt("Enter no. 3: "));

if(num1 < num2 && num1 < num3){
  console.log(`num1 is small: ${num1}`)
} else if(num2 < num1 && num2 < num3){
  console.log(`num2 is small: ${num2}`)
} else {
  console.log(`num3 is small: ${num3}`)
}
*/

//2.1 Find the greatest of three numbers. Numbers are given by the user.
/* 
let num1 = Number(prompt("Enter no. 1: ")); 
let num2 = Number(prompt("Enter no. 2: ")); 
let num3 = Number(prompt("Enter no. 3: ")); 

if(num1 > num2 && num1 > num3){
  console.log(`num1 is greatest: ${num1}`)
} else if(num2 > num1 && num2 > num3){
  console.log(`num2 is greatest: ${num2}`)
} else {
  console.log(`num3 is greatest: ${num3}`)
}
*/

//3
/*
Write a program to manage Role-Based Access Control
Given a user role ("admin", "editor", "viewer"):
Admin: full access
Editor: edit access
Viewer: read-only
Any other: no access
*/
// let role = null;
// role = prompt("Enter the role: (Admin, Editor, Viewer)");
// switch (role) {
//   case "Admin":
//   alert("full access");
//   break;

//   case "Editor":
//   alert("edit access");
//   break;

//   case "Viewer":
//   alert("read-only");
//   break;

//   default:
//   alert("no-access");
// }

//4. Check if Number is Divisible by 3 or 5 or Both. Print "Fizz" for multiples of 3,"Buzz" for multiples of 5,"FizzBuzz" for both.
/*
let num = Number(prompt("Enter the number: "));
if(num % 3 === 0){
    alert("Fizz");
} else if(num % 5 === 0){
    alert("Buzz")
} else if (num % 3 === 0 && num % 5 === 0){
  alert("FizzBuzz")
} else {
  alert("None of the numbers are divisible")
}
*/

// 5. Create a simple calculator. Take two numbers and an operator (+, -, *, /) and calculate the result using switch.
/*
let num1 = 4;
let num2 = 5;
let operator = prompt("Enter the operator: , (+, -, *, /)");
switch(operator){
  case "+":
  console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`);
  break;

  case "-":
  console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
  break;

  case "*":
  console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);
  break;

  case "/":
  console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`);
  break;

  default:
  console.log("invalid operator");
}
*/

//6. 
/* 
Create a simple ATM program.
User can choose:
1. Check Balance
2. Deposit
3. Withdraw
4. Exit
Note that in case of “Deposit” if deposit amount is less than 1Rs produce error otherwise deposit the amount and show
the message with a new balance. And in case of “Withdraw” if withdraw amount is greater than balance then or less
than 1Rs then produce error otherwise withdraw amount and show remaining balance.*/
/*
let totalAmount = 10000;
let userChoice = Number(prompt("Enter your choice: , [1.Check Balance 2.Deposit 3.Withdraw 4.Exit]"));
if(userChoice === 1){
  console.log("Your current balance is: ", totalAmount);
} else if(userChoice === 2){
  let depositAmount = Number(prompt("Enter the amount: "));
  depositAmount += totalAmount;
  console.log("Your current balance is: ", depositAmount);
} else if(userChoice === 3){
  let withdrawnAmount = Number(prompt("Enter the amount: "));
  if(totalAmount > 0){
     totalAmount -= withdrawnAmount;
     console.log("Your current balance is: ", totalAmount);
  }
} else {
  console.log("Exit")
}
*/