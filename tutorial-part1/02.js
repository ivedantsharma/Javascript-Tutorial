//prompt at 137 line
// typeof operator

//data types (primitive data types)
//String "vedant"
//number 2, 4, 5.6
//booleans
//undefined
//null
//BigInt
//Symbol

let age = 22;
let firstName = "Vedant";

console.log(typeof firstName);
console.log(typeof 5);

//convert number to string
// 22 -> "22"
age = age + "";
console.log(typeof age);

//convert string to number
let mystr = "34";
mystr = +"34";//adding + before a string convert it into a number
console.log(typeof mystr);

//another method o change string to number and number to string
let age1 = 18;
age = String(age);
console.log(typeof age);
age = Number(age);
console.log(typeof age);


//string concatenation
let string1 = "harshit";
let string2 = "mohit";
let name = string1 + " " + string2;
console.log(name);
let num1 = "15";
let num2 = "24";
let num = num1 + num2;
console.log(num);
num = +num1 + +num2;//adding + before a string convert it into a number
console.log(num);

//template string
let ages = 22;
let firstname = "Vedant";

// let aboutMe = "My name is " + firstname + " and my age is " + ages;
// console.log(aboutMe);

let aboutMe = `my name is ${firstname} and my age is ${ages}`;//this is template string syntax
console.log(aboutMe);

//undefined
// null
let a;
console.log(typeof a);
a="abcd";
console.log(typeof a);

let myVariable = null;
console.log(typeof myVariable);
console.log(typeof null);

//BigInt
console.log(Number.MAX_SAFE_INTEGER);
let p = BigInt(46255151158625415924156625);
let samenumber = 23n;
console.log(p);
console.log(samenumber);

//we can print multiple things in one console
console.log(typeof a, "refrefr", firstName);

//boooeans and comparison operators
let number1 = 7;
let number2 = 7;
console.log(number1>number2);

//== vs ===
console.log(number1==number2);//== checks value not datatype
let ab = "7";
console.log(number1===number2);
console.log(ab===number1);//=== checks both dataype and value

//!= vs !==
console.log(number1 != number2);
let abc = "7";
console.log(abc !== number2);


//if else condition
let ages1 = 17;
if (ages1>=18) {
    console.log("She/He can vote");
}
else {
    console.log("She/He can't vote");
}
if(ages1%2==0) console.log(true);
else console.log(false);

//truthy and falsy values

// falsy values -> if any value is below given value then its a falsy values and rest else is truthy values
// false
// ""
// null
// undefined
// 0


let first = "";
if(first) console.log(first);
else console.log("first name is empty");

// ternary/conditional operator
let ages2 = 8;
let drink = ages2>=5 ? "coffee" : "milk";
console.log(drink);

//and & or operator

let ages3 = 18;
let Name = "Vedant";
if(Name[0]==="V" && ages>=18) console.log("baap hu");
else console.log("baap nhi hu");
if(Name[1]==="V" || ages>=18) console.log("baap hu");
else console.log("baap nhi hu");

//nested if
let winnigNumber = 19;
let userguess = +prompt("Guess a number");//we applied + because by default the entered value is string
if(userguess===winnigNumber) console.log("user guess is right!!");
else if(userguess<winnigNumber) console.log("too low!!!"); else console.log("too high!!!");

//if
//else if
//else
let temp=37;
if(temp<0) console.log("extreme cold");
else if(temp<37) console.log("cold");
else if(temp>37) console.log("hot");
else console.log("normal temp");

//switch statement
let day=4;
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 1:
        console.log("tuesday");
        break;
    case 2:
        console.log("wednesday");
        break;
    case 3:
        console.log("thursday");
        break;
    case 4:
        console.log("friday");
        break;
    case 5:
        console.log("saturday");
        break;
    case 6:
        console.log("sunday");
        break;
    default:
        console.log("invalid day")
        break;
}