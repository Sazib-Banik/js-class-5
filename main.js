// JavaScript conditional statement
let age = 20;

if(age>=18){
  console.log("You are full age.");
} else {
  console.log("You are not full age.");
}

// JavaScript Ternary Operator
/*
  Ternary Operator Syntex... ... ...
  (Condition) ? true : false;
*/

// example 1
age >= 18 ? console.log("you are full age.") : console.log("you are not full age.");

// example 2
let food;
if (age >= 18) {
  food = "Chicken";
  console.log(`He likes to eat ${food}.`);
} else {
  food = "Ice-cream";
  console.log(`He likes to eat ${food}.`);
}

// eita good practice nah..
age>=18 ? console.log(`He likes to eat ${food}.`) : console.log(`He likes to eat ${food}.`);

// good practice
console.log(`He likes to eat ${ age>= 18 ? "Chicken" : "Ice-cream"}`);

let result= 25;
console.log(`you are ${result >= 33 ? "pass" : "fail"} in the exam.`)

let run = 20;
console.log(`you will be ${run >= 25 ? "win" : "loss"} the match.`)

//JavaScript Function... ... ... 
/*
  Function Syntax... ... ...

  function functionName(parameter){
    excutable code block;
  }
  functionName(argument);

*/
function showText(){
  console.log("some text.");
}
showText();

// function example 2
function showName(name){
  console.log(`your name is ${name}`);
}
showName("sazib");
showName("srejon");
showName("rokibur");

// sum() example
function sum(num1, num2){
  console.log(num1 + num2);
}
sum(5, 2);

// substruction() example
function sub(num1, num2){
  console.log(num1 - num2);
}
sub(5, 2);

// multiplication() example
function mul(num1, num2) {
  console.log(num1 * num2);
}
mul(5, 2);
// division() example
function divi(num1, num2){
  console.log(num1 / num2);
}
divi(6, 2);

// average() example
function avg(n1,n2,n3,n4,n5){
  let total = n1 + n2 + n3 + n4 + n5;
  let avg = total/5;
  return avg; 
}

const Aresult = avg(25, 65, 75, 50, 80);
console.log(`Your Average Result is ${Aresult}`);

// Function Expression

const Eavg = function (n1, n2, n3, n4, n5) {
  let total = n1 + n2 + n3 + n4 + n5;
  let avg = total / 5;
  return avg;
};
const Eresult = Eavg(25, 65, 75, 50, 80);
console.log(`Your Average Result is ${Eresult}`);


const Esum = function (n1, n2){
  let total = n1 + n2;
  return total;
}
const Eresutl = Esum(25, 20)
console.log(Eresult);

















