//objects
//objects are refrence type
//arrays are good but not sufficient
//for real world data
//objects store key value pairs
//object don't have inject

//how to create objects
//const person = {name:"Harshit",age:19,};
const person = {
    name: "Harshit",
    //we can write key in double quotes also it will not give error
    // "age": 19;
    age: 19,
    hobbies: ["guitar","sleeping","gaming"]
}
console.log(person);
console.log(typeof person);

//how to access data from objects
console.log(person["name"]);//we can print value of key in this way or the way below showed for age
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

//how to add key value pairs to object
// person["gender"] = "male"
person.gender = "male";
console.log(person);

//dot vs bracket notation
const key = "email";
const person1 = {
    name: "Harshit",
    age: 19,
    "person hobbies": ["guitar","sleeping","music"]
}
//we can use [] if key has two words
console.log(person1["person hobbies"]);
//if we dont use "" inside [] when we write key then it will take varible key 
person1[key] = "vedant@gmail.com";
console.log(person1);


//how to iterate objects
//for in loop
//Object.keys
const person2 = {
    name: "Harshit",
    age: 19,
    hobbies: ["guitar","sleeping","gaming"]
}
//for in loop
for(let key in person2) {
    console.log(key);
    console.log(person2[key]);
    console.log(`${key} : ${person2[key]}`);//it is used to print both key value pair together
}
//Object.keys
console.log(Object.keys(person2));
console.log(typeof Object.keys(person2));
console.log(Array.isArray(Object.keys(person2)));

for(let key of Object.keys(person2)) {
    console.log(person2[key]);
}


//computed properties
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";
//computed properties help to make variable keys when we are initializing object and its key-value pairs
const obj = {
    [key1] : value1,
    [key2] : value2
}
console.log(obj);

//spread operator
const array1 = [1,2,3];
const array2 = [5,6,7];

// const newArray = [...array1,...array2];
const newArray = [..."abc"];//this will make each alphabet of string a seperate element
const abcd = [..."1234567890"];
console.log(newArray);
console.log(abcd);

//spread operator in case of objects
const obj1 = {
    key1: "value1",
    key2: "value2"
}
const obj2 = {
    key3: "value",
    key4: "value4"
}
const newobj = {...obj1,...obj2};
// const newObject = {..."abcd"};
const newObject = {...["item1","item2"]};
// console.log(obj1);
console.log(newobj);
console.log(newObject);


