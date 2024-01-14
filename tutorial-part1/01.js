"use strict";//by writing this javascript tells us if we had done any syntax mistake
// console.log can print something on console
console.log("Hello World");


//declare a variable and use it
var firstname = "Vedant Sharma";
console.log(firstname);

//change value of variable
firstname="Vedant";
console.log(firstname);


var value1 = 4;
console.log(value1);
console.log(value1+10);
console.log(value1 ** 2);//this gives power


//let keyword
//declare variable with let keyword
//it is better to use let then var
let firstName = "Mohit";
console.log(firstName);


//declare constant
//constant value cant be change once assigned
const pi = 3.14;
console.log(pi);


//String indexing
let first = "Harshit";
console.log(first[3]);
console.log(first.length);
console.log(first[first.length-1]);

//trim()  it will remove spaces
//toUpperCase()
//toLowerCase()
//slice
let abcd = "      yash       ";
console.log(abcd.length);
console.log(abcd);
console.log(abcd.trim());
abcd = abcd.trim();
console.log(abcd.length);
console.log(abcd);

console.log(abcd.toUpperCase());
console.log(abcd.toLowerCase());

let newString = abcd.slice(0,2);
console.log(newString);
console.log(abcd.slice(1));//it will slice string from index 1 to end