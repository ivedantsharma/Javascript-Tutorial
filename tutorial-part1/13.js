//methods
//method is function inside object

function personinfo() {
    console.log(`${this.firstName} is here with age ${this.age}`);
}

const person = {
    firstName : "vedant",
    age : 19,
    about : personinfo
};
const person1 = {
    firstName : "harsh",
    age : 29,
    about : personinfo
};
const person2 = {
    firstName : "mohit",
    age : 15,
    about : personinfo
};
const person3 = {
    firstName : "saransh",
    age : 9,
    about : personinfo
};

person.about();
person1.about();
person2.about();
person3.about();

//this keyword
console.log(this);
console.log(window);

function myFunc() {
    // "use strict"
    console.log(this);
}
myFunc();

function hello() {
    console.log("hello world");
}

hello.call();//by writing .call() function also, we can call a function

//call apply bind

function about(hobby, favmusician) {
    console.log(this.firstName,this.age,hobby,favmusician);
}

const user1 = {
    firstName : "vedant",
    age : 19,
    // about : function(hobby, favmusician) {
    //     console.log(this.firstName,this.age,hobby,favmusician);
    // }
    //uncomment once and then comment lines after apply to see
}

const user2 = {
    firstName : "mohit",
    age : 9,
}
// user1.about();
// user1.about("piano","haleluhia");
// user1.about.call(user2,"guitar","mozart");
// user1.about.call(user2,"guitar");
// user1.about.call();
about.call(user1,"guitar");


//apply
//in apply we just paas by making array
about.apply(user1,["guitar","moazart"]);

//bind
//bind creates a function and stores the value in function
const func = about.bind(user1,"guitar","bach");
func();


//warning related call apply and bind
//we cant normally assign a variable value of user1.about() insted we have to use bind method
const user3 = {
    firstName : "vedant",
    age : 19,
    about : function(hobby, favmusician) {
        console.log(this.firstName,this.age,hobby,favmusician);
    }
}
const myFunc1 = user3.about.bind(user3,"guitar","ichik");
myFunc1();

//arrow function and this

const user4 = {
    firstName : "Vedant",
    age : 19,
    about : () => {
        console.log(this.firstName,this.age);
    }
}

user4.about();


//short syntax for creating method inside function
// const user4 = {
//     firstName : "Vedant",
//     age : 19,
//     about() {
//         console.log(this.firstName,this.age);
//     }
// }
// user4.about();



