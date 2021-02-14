// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
let myFunction = () => console.log("Function was invoked!");

myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
let anotherFunction = str =>  str;

console.log(anotherFunction("Hello World!"));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (num1, num2) => num1 + num2;

console.log(add(1, 2));


// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (num1, num2) => num1 - num2;

console.log(subtract(3, 1));


// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
arr = [1,2,3,4,5,6,7,8,9,10];
const triple = arr.map(num => num * 3);
console.log(triple); 