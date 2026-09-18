//Question on for loop, while loop.

//Q. print table of given number
// let a = 136;
// for(let i = 1; i <= 10; i++){
//     console.log(`${a} X ${i} = ${a * i}`);
// }


// //Q. write a program to print "try again" until user enters correct numbers.
// let aa = prompt("Enter the number: "); 
// while(isNaN(aa)){
//   console.log("Try again");
//   aa=prompt("Enter the number: "); 
// } 


;

//Q. Calculate the sum of first n number.
// let num = Number(prompt("Enter the number: "));
// let a = 0;
// for(let i = 1; i <= num; i++){
//    a = a + i;
// };
// console.log(a);


// let num1 = Number(prompt("Enter the number1: "));
// let num2 = Number(prompt("Enter the number2: "));
// let sum = 0;
// for(let i = num1; i <= num2; i++){
//     sum = sum + i;
// }
// console.log(sum);

// Number Knucker Game
// let computerNumber = 6;
// let guess = null;
// while(guess !== computerNumber){
//       guess = Number(prompt("Enter the number: "));
//       if(isNaN(guess)){
//         console.log("Invalid input!")
//       } else if(guess < computerNumber){
//         console.log("Too low!")
//       } else if(guess > computerNumber){
//         console.log("Too high!")
//       } else {
//         console.log("Congratulation!")
//       }
// }


//Simple password checker with fixed attempts
// const password = "alpha";
// let attempts = 0;
// let user = null;
// while(user !== password && attempts < 3){
//       user = prompt("Enter the password");
//       attempts++;

//       if(user === password){
//         alert("Correct password")
//       } else if(attempts >= 3) {
//         alert("Your attempts is over, Try again!");
//       } else {
//         alert("Incorrect Password")
//       }
// }


/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

// let n = 5;
// for(let i = 1; i <= n; i++){
//     let str = " ";
//     for(let j = 1; j<=i; j++){
//       str = str + j + " ";
//     }
//     console.log(str);
// }


// story game
// let playGame = "yes";

// while(playGame === "yes") {
// alert("You wake up in the dark forest....");
// let userchoice = prompt("Do you go left or right?")
// if(userchoice === 'left'){
//    alert("you walk into swamp");
//    userchoice = prompt("You see something shiny in the mud. Do you pick it up? (yes or no)")
//    if(userchoice === 'yes'){
//       alert("It's a magic stone!, you're teleported to safty, you win! ");
//    } else {
//      alert("You sink slowly into the mud. Game Over!!")
//    }
// } else {
//   alert("You find a cave!");
//   userchoice = prompt("Do you want to enter the cave? (yes or no)");
//   if(userchoice === 'yes'){
//     alert("Dragon chases and you barely scape !!")
//   } else {
//     alert("You set up a camp outside the cave. You Win !!")
//   }
// }

// // exit the game
//  userchoice = prompt("Do you want to play again? (yes or no)")
//  if(userchoice === "no"){
//     playGame = "no";
//  }
// }


