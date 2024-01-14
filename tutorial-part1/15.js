// in javascript function is treated as function and as object also
function hello() {
    console.log("hello world");
}

console.log(hello.name);// .name will tell the name of the function

//we can add our own property of function
hello.myownproperty = "very unique value";
console.log(hello.myownproperty);

//function provide more usefull properties just like .name

//prototype
//only function provides prototype property
//console.log(hello.prototype);// {}
if(hello.prototype) {
    console.log("prototype is present");
}
else {
    console.log("prototype is not present");
}
const hello1 = [2,5,6];
if(hello1.prototype) {
    console.log("prototype is present");
}
else {
    console.log("prototype is not present");
}

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalla lalla lori";
};

console.log(hello.prototype);
console.log(hello.prototype.sing());

//linking proto and prototype
//in file 14 we made a userMethod object for create user for refrence proto but instead 
//we already have a empty object which is prototype so we can refrence our proto to createuser.prototype
// const userMethods = {
//     about : function() {
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18 : function() {
//         return this.age>=18;
//     },
//     sing : function() {
//         return `toon tananananana`;
//     }
// }

function createUser(firstName, lastName, email, age, address) {
    // const user = Object.create(userMethods);//we will see this below in this file only
    const user = Object.create(createUser.prototype);
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

createUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years old`
};
createUser.prototype.is18 = function() {
    return this.age>=18;
};
createUser.prototype.sing = function() {
    return `toon tanananananana`;
};


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
