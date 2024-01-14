"use strict";
// function
//function declaration
//function expression

function singHappyBirthday() { //this is function declaration
    console.log("Happy Birthday to you......");
}
singHappyBirthday();

const singhappybirthday = function() {//this is function expression
    console.log("Happy Birthday to you......");
}
singhappybirthday();

function sum(x,y){
    return x+y;
}
console.log(sum());
console.log(sum(9,5));

const sum1 = function(num1,num2) {
    return num1+num2;
}
console.log(sum1(45,78));
     
//odd or even function
function isEven(x) {
    return x%2===0;
}
console.log(isEven(8));

//take input as string and return its first alphabet
function firstChar(str) {
    return str[0];
}
console.log(firstChar("eefrefw"));

//linear search in array
function find(arr,target) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i]===target) return i;
    }
    return -1;
}
console.log(find([1,8,1,7,6,1,89,21,6],21));

const find1 = function(arr,target) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i]==target) return i;
    }
    return -1;
}
console.log(find1([1,8,1,7,6,1,89,21,6],6));


//arrow function
const singhBirthday = () => {
    console.log("happy birthday to you......");
}
singhBirthday();
const sum2 = (x,y,z) => {
    return x+y+z;
}
console.log(sum2(1,2,3));

const even = (num) => {
    return num%2==0;
}
console.log(even(28451));
const even1 = (num) => num%2===0;//this is the syntax of arrow function if we have just one line to execute in function
console.log(even1(7489562));

const str = (str) => str[0];
console.log(str("UedeHgyvybhjcx"));

//example for function declaration,expression,arrow function
function factorial(a) {
    let p=1;
    for (let i = 1; i <= a ; i++) {
        p=p*i;
    }
    return p;
}
const factorial1 = function(a) {
    let p=1;
    for (let i = 1; i <= a ; i++) {
        p=p*i;
    }
    return p;
}
const factorial2 = (a) => {
    let p=1;
    for (let i = 1; i <= a ; i++) {
        p=p*i;
    }
    return p;
}
console.log(factorial(5));
console.log(factorial1(5));
console.log(factorial2(5));