"use strict"
// const user1 = {
//     firstName : "harshit",
//     lastName : "sharma",
//     email : "harshitsharma@gmail.com",
//     age : 12,
//     address : "houseno, colony, pincode, state",
//     about : function() {
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18 : function() {
//         return this.age>=18;
//     }
// }
// const aboutUser = user1.about();
// console.log(aboutUser);

//function making 
//this function create object , add key value pair to it ,and return the object
const userMethods = {
    about : function() {
        return `${this.firstName} is ${this.age} years old`
    },
    is18 : function() {
        return this.age>=18;
    },
    sing : function() {
        return `toon tananananana`;
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(userMethods);//we will see this below in this file only
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;
    // user.sing = userMethods.sing;
    return user;
}

const user1 = createUser("vedant","sharma","vedant@gmail.com",19,"vrindavan up");
const user2 = createUser("harsh","aggrawal","harsh@gmail.com",17,"delhi india");
const user3 = createUser("shivam","sharma","shivam@gmail.com",18,"rajkot up");

console.log(user1);
console.log(user2);
console.log(user3);
const is18 = user1.is18();
const about = user1.about();
console.log(about);
console.log(is18);
console.log(user2.about());
console.log(user3.about());
console.log(user1.sing());

//Object.create()

const obj1 = {
    key1 : "value1",
    key2 : "value2",
}

//const obj2 = {};
//obj2.key3 = "value3";
//there is one more way to create empty object
const obj2 = Object.create(obj1); //{}
//it creates an object obj2 with its proto equals to obj1
//it means if a key is not found in obj2 then js will see in its proto or prototype means obj1
obj2.key3 = "value3";
console.log(obj2.key2);
console.log(obj2.__proto__);
