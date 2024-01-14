//hoisting
//we can call function before we write function in js but this is only for function declaration

// hello();

const hello1 = function() {
    console.log("hello world");
}

//function inside function
const app = () => {
    const myFunc = () => {
        console.log("hello world");
    }
    const addttwo = (num1,num2) => num1+num2;

    const mul = (num1,num2) => num1*num2;
    console.log("inside app");
    myFunc();
    console.log(addttwo(5,78));
    console.log(mul(45,2));
}
app();

//lexical scope
const myVar = "value1";

function myApp() {
    
    function myfunc() {
        const myVar = "value59";
        const myfunc2 = () => console.log("inside my func",myVar);
        myfunc2();
    }
    console.log(myVar);
    myfunc();
}
myApp();


//block scope vs function scope
//let and const are block scope. we cant use them outside block
//var is funtion scope

{
    let firstName = "Vedant";//we cant use firstName outside this block as this is initialised as let
}

{
    let firstName = "Vedant";
    console.log(firstName);
}

{
    var firstName = "Vedant";
}
console.log(firstName);

function my() {
    if(true) {
        var firstName = "Vedant";
        console.log(firstName);
    }
    console.log(firstName);
}
my();


//dafault parameter

// function addTWO(a,b) {
//     if(typeof b==="undefined") {
//         b=0;
//     }
//     return a+b;
// }
function addTWO(a,b=0) {
    return a+b;
}

const ans = addTWO(4,8);
console.log(ans);
const ans1 = addTWO(10);//it will take value of b as 0
console.log(ans1);
//rest parameters

function myfunct(a,b,...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myfunct(3,4,5,6,7,8,9);

function addall(...a) {
    let sum=0;
    console.log(a);
    for(let key of a) {
        sum=sum+key;
    }
    console.log(sum);
}
addall(1,2,3,4,5);
