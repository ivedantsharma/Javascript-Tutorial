//param destructing
//used with object
//used in react a lot

const person = {
    fisrtName: "Vedant",
    gender: "male",
    age: 19,
}

// function printDetails(obj) {
//     console.log(obj.fisrtName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }

function printDetails({fisrtName,gender,age}) {
    console.log(fisrtName);
    console.log(gender);
    console.log(age);
}

printDetails(person);

//callback function

function myfunc(callback) {
    console.log("hello there im a function and blah blah blah...!!!")
    callback("Vedant Sharma");
}

function myfunc2(name) {
    console.log("inside my func 2");
    console.log(`My name is ${name}`);
}
myfunc(myfunc2);


//function returning function

function myFunc() {
    function hello() {
        return "hello world";
    }
    return hello;
}

function myFunc2() { //above function can also be written as this func
    return function() {
        return "hello world";
    }
}

const ans = myFunc();
console.log(ans());

const ans1 = myFunc2();
console.log(ans1());