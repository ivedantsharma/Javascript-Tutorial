//primitive vs refrence data types
let num1 = 6;
let num2 = num1;
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);
num1++;
console.log("after incrementing num1")
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);

//refrence types
//array
let array1 = ["item1","item2"];
let array2 = array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1",array1);
console.log("array2",array2);

//how to clone array
//how to concatenate two array
console.log(array1===array2);
let array3 = array1.slice(0);//by this the changes made in array1 will not be reflected in array3 or there is 0 effect on array3
array1.push("item4");
console.log(array3);
//another way
let array4 = [].concat(array1);
console.log(array4);
//another way
let array5 = [...array1];//this is known as spread operator
console.log(array5);

//concatenate array and add extra elements also
let array6 = array1.slice(0).concat(["item1","item6"]);
// another way for this
let array7 = [].concat(array1,["item1","item6"]);
// another way
let array8 = [...array1,"item4","item5"];
let array9 = [...array1,...array2];

//use const for creating arrays
//mostly use const for primitive data types
//const does not allow to modify
const fruits = ["apple","mango"];
fruits.push("banana");
console.log(fruits);


//for of loop
//it takes value of each index
for(let fruit of fruits) {
    console.log(fruit.toUpperCase());
}

//for in loop
//it takes index of arrays
for(let index in fruits) {
    console.log(fruits[index].toUpperCase());
}

//array destructing
const myarray = ["value1","value2","value3","value4"];
let myvar1 = myarray[0];
let myvar2 = myarray[1];
console.log(myvar1,myvar2);
let [var1,var2] = myarray;//this is array destructing where we can take values of array in just one line and assign them to a variable
console.log(var1,var2);
let [var3,,var4] = myarray;
console.log(var3,var4);
let myNewarray = myarray.slice(2);
let [var5,var6,...mynewarray] = myarray;//by this a array of mynewarray will be created from index 2 to end
console.log(var5,var6,mynewarray);

