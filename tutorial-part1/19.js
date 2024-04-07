//PART 2 STARTED


//compilation
//code execution

//why compilation
//how javascript code executes

//what is global execution context?
//what is local execution context?
//closures
//var hoisted 
console.log(this);
console.log(window);
// console.log(firstName);
// var firstName =  "Harshit";
// console.log(firstName);
console.log(myFunction);
myFunction();
console.log(fullName);

//function declaration
function myFunction() {
    console.log("this is my function");
}
var firstName = "Harshit";
var lastName = "Sharma";
var fullName = firstName + " " + lastName;
console.log(fullName);
myFunction();


console.log(myfunction);
//function expression
var myfunction = function() {
    console.log("this is my function");
}
console.log(myfunction);


//let and const hoisted
//in let and const hoiting happens, but the variables are uninitialized
//you can check by uncomment the next line
// console.log(firstname);
let firstname = "Vedant";
console.log(firstname);


//function execution context
let foo = "foo";
function getFullName(firstname,lastname) {
    console.log(arguments);
    let myVar = "var inside function";
    console.log(myVar);
    const fullname = firstname+" "+lastname;
    return fullname;
}

const personName = getFullName("Vedant","Sharma");
console.log(personName);


//lexical environment, scope chain

const ln = "Sharma";

const printName = function() {
    const fn = "Vedant";
    console.log(fn);
    console.log(ln);
}
printName();