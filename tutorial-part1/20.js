//closures

//function can return functions

//example 1
function printfullname(firstname,lastname) {
    function printname() {
        console.log(firstname,lastname);
    }
    return printname;
}

const ans1 = printfullname("Vedant","Sharma");
console.log(ans1);
ans1();

//example 2

function hello(x) {
    const a = "varA";
    const b = "varB";
    return function() {
        console.log(a,b,x);
    }
}

const ans2 = hello("arg");
ans2();

//example 3

function myfunction(power) {
    return function(number) {
        return number ** power;
    }
}

const square = myfunction(2);
const ans3 = square(3);
console.log(square);
console.log(ans3);

//example 4

function func() {
    let counter = 0;
    return function() {
        if(counter<1) console.log("Hi, you can call me"),counter++;
        else console.log("mai already ek baar print ho chuka hu");
    }
}

const myfunc = func();
console.log(myfunc)
myfunc();
myfunc();
const myfunc2 = func();
myfunc2();
myfunc2();