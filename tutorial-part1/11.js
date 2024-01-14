//find method
//it gives just first occurence of condition and return it
//it return true or false and give answer for true
const myArray = ["hello","cat","dog","lion"];

// function islength3(string) {
//     return string.length === 3;
// }

const ans = myArray.find((string)=>string.length===3);
console.log(ans);

const users = [
    {userID: 1, userNAME: "Vedant"},
    {userID: 2, userNAME: "Harsh"},
    {userID: 3, userNAME: "Nitish"},
    {userID: 4, userNAME: "Mohit"},
    {userID: 5, userNAME: "Aaditya"},
];
const myUSER = users.find((user)=>user.userID===3);
console.log(myUSER);

//every method
//it return true or false
//even if one cond is false then it will give false
// it behaves like and
const numbers = [2,4,6,9,10];

const ans1 = numbers.every((number)=>number%2===0);
console.log(ans1);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
];

const a = userCart.every((product)=>product.price<30000);
console.log(a);

//some method
//even if for one time we got true value then ans will be true.
// it behaves like or
const numbers1 = [3,5,8,9];

const ans2 = numbers1.some((number)=>number%2===0);
console.log(ans2);

const userCart1 = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
    {productId: 3, productName: "macbook", price: 250000},
];
const b = userCart1.some((cartitem)=>cartitem.price>100000);
console.log(b);


//fill method
// const myarray = new Array(10).fill(-1);
// console.log(myarray);
//value,start,end+1
const myarray = [1,2,3,4,5,6,7,8];
myarray.fill(0,2,5);
console.log(myarray);


//splice method
//start , delete , insert
const arr = ['item1','item2','item3'];

//delete
// const deleteditem = arr.splice(1,1)
// console.log(arr);
// console.log(deleteditem);

//insert
// arr.splice(1,0,'inserted item');
// console.log(arr);

//delete and insert
const deleteditem = arr.splice(1,2,"hulalala","huehue");
console.log(arr);
console.log(deleteditem);

