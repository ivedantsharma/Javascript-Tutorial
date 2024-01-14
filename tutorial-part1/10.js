//important array methods

//forEach method
//foreach is a loop that takes value at index and index at each iteration
const numbers = [4,2,5,8];

// function myfunc(number, index) {
//     console.log(`index is ${index} & number is ${number}`)
// }

numbers.forEach(function(number,index) {
    console.log(`index is ${index} & number is ${number}`)
});

numbers.forEach(function(number,index) {
    console.log(`number multiplied by two gives ${number*2}`);
});

const users = [
    {firstName: "vedant" , age: 23},
    {firstName: "mohit" , age: 21},
    {firstName: "nitish" , age: 22},
    {firstName: "garima" , age: 20},
]

users.forEach(function(obj) {
    console.log(`name is ${obj.firstName}`)
});

//map methods
//this method makes a new array and input result of each iterations at each index
//we always have to return somethings when using map function and to not use console.log()
// map is also a loop that takes value at index and index at each iteration
const numbers1 = [3,4,6,1,8];

const square = function(number) {
    return number*number;
}

const squarenumbers = numbers1.map(square);
console.log(squarenumbers);

const users1 = [
    {firstName: "vedant" , age: 23},
    {firstName: "mohit" , age: 21},
    {firstName: "nitish" , age: 22},
    {firstName: "garima" , age: 20},
]

const usernames = users1.map(user=> {
    return user.firstName;
})
console.log(usernames);

//filter method
//it also makes a new array and fill only those values at index for which they are true only

const numbers2 = [1,3,2,6,4,8];

const isodd = function(number) {
    return number%2!==0;
}

const oddnumbers = numbers2.filter(isodd);//we can also write the function and this line as below just like callback function

// const oddnumbers = numbers2.filter(function(number) {
//     return number%2!==0;
// });
console.log(oddnumbers);


//reduce method
//in reduce method the return value become accumulator for next iteration

const numbers3 = [1,2,3,4,5];

const sum = numbers3.reduce((accumulator, currentvalue)=>{
    return accumulator+currentvalue;
}/*,100*/);//the place we have written 100defines the initial value of accumulator and then the current value will be th value at index 0
//this is totally optional to do
console.log(sum);
// accumulator         currentvalue         return
//1                          2                 3
//3                          3                 6
//6                          4                 10
//10                         5                 15

const usercard = [
    {productID: 1,productNAME: "mobile", price: 12000},
    {productID: 2,productNAME: "laptop", price: 22000},
    {productID: 3,productNAME: "tv", price: 15000},
]


const totalAmount = usercard.reduce((totalprice,currentproduct) => {
return totalprice+currentproduct.price;
},0);

console.log(totalAmount);


//sort method
const numbers4 = [5,9,1200,400,3000];
numbers4.sort((a,b)=>{
    return a-b;
});
//a-b is used to sort ascending and b-a is for descending
//a-b ----->positive -----> b,a
//a-b ----->negative -----> a,b
// numbers4.sort((a,b)=>a-b);
console.log(numbers4);

const products = [
    {productID: 1, productNAME: "p1", price: 300},
    {productID: 2, productNAME: "p2", price: 3000},
    {productID: 3, productNAME: "p3", price: 200},
    {productID: 4, productNAME: "p4", price: 8000},
    {productID: 5, productNAME: "p5", price: 500},
];

//sort low to high
const lowtohigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price;
});
console.log(lowtohigh);

