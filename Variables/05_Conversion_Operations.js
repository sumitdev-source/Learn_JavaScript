//it is also known as type coercion, where we convert one data type into another datatype.
// now we convert string into number
//1. When score variable is integer;
 /* 
   let score = 33;
   console.log("datatype is: " + typeof score + ", " + "Score is: " + score); */

// 2. now we make score a string

let score = "33sbc";
console.log("datatype is: " + typeof score + ", " + "Score is: " + score);

//now we convert string into number
let StringintoNum = Number(score);
console.log("datatype is: " + typeof StringintoNum + ", " + "Score string is converted into number datatype : " + StringintoNum);

console.log(typeof score)
// 3. Now we change the value of score and check the result;