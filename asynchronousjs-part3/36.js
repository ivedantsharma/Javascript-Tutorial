// understand callback

function myFunc(callback) {
    console.log("Function is doing some task 1");
    callback();
}
function myFunc2() {
    console.log("Function is doing some task 2");
}
myFunc(myFunc2);

function getTwoNumbersAndAdd(number1, number2, callback) {
    if(typeof number1 === "number" && typeof number2 === "number") {
        callback(number1,number2);
    }
    else console.log("Wrong Data type");
}

// function addTwoNumbers(num1, num2) {
//     console.log(num1+num2);
// }


getTwoNumbersAndAdd(4,4,(num1,num2)=> {
    console.log(num1+num2);
}, () => {
    console.log("Wrong Data type");
    console.log("Please pass numbers only");
})