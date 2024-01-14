"use strict"
//new keyword
//new keyword do 3 tasks
//1. create empty object this = {}
//2. return this
//3. automatically link proto and prototype, we do not have to do manually
function createuser1(firstName,age) {
    this.firstName = firstName;
    this.age = age;
}
createuser1.prototype.about = function() {
    console.log(this.firstName,this.age);
}

const use = new createuser1("vedant",19);
console.log(use);
use.about();

//for using new keyword it is a good practice to start function name first alphabet with a capital letter
function CreateUser(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // return this;//writing this line dosent make any difference due to use of new keyword
}

CreateUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years old`
};
CreateUser.prototype.is18 = function() {
    return this.age>=18;
};
CreateUser.prototype.sing = function() {
    return `toon tanananananana`;
};


const user1 = new CreateUser("vedant","sharma","vedant@gmail.com",19,"vrindavan up");
const user2 = new CreateUser("harsh","aggrawal","harsh@gmail.com",17,"delhi india");
const user3 = new CreateUser("shivam","sharma","shivam@gmail.com",18,"rajkot up");

//hasOwnProperty
//this will give only those key which are not in prototype
for(let key in user1) {
    // console.log(key);
    if(user1.hasOwnProperty(key)) {
        console.log(key);
    }
}
console.log(user1);
console.log(user2);
console.log(user3);
const is18 = user1.is18();
const about = user1.about();
console.log(about);
console.log(is18);
console.log(user2.about());
console.log(user3.about());

let numbers = [1,2,3];
console.log(Object.getPrototypeOf(numbers));
console.log(Array.prototype);
console.log(Array.isArray(Array.prototype));
