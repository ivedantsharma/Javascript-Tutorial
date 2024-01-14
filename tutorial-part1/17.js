//class keyword
//class are fake in js
class CreateUser {
    constructor(firstName, lastName, email, age, address) {
        console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about() {
        return `${this.firstName} is ${this.age} years old`;
    }
    is18() {
        return this.age>=18;
    }
    sing() {
        return `toon tanananananana`;
    }
    func(a) {
        console.log(a);
    }
}




const user1 = new CreateUser("vedant","sharma","vedant@gmail.com",19,"vrindavan up");
const user2 = new CreateUser("harsh","aggrawal","harsh@gmail.com",17,"delhi india");
const user3 = new CreateUser("shivam","sharma","shivam@gmail.com",18,"rajkot up");

console.log(user1.firstName);
console.log(user2.is18());
console.log(Object.getPrototypeOf(user1));
user1.func(15);

//practice for making classes

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`;
    }

    isSuperCute() {
        return this.age <=1;
    }

    isCute() {
        return true;
    }
}

const animal1 = new Animal("tom",2);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isSuperCute());

//inheritance
//super
//making a subclass or a child class using extend keyword
class Dog extends Animal {
    constructor(name,age,speed) {
        super(name,age);
        this.speed = speed;
    }
    //first js will search for function in dog class and if it is not available in dog class then it will search in parent class
    eat() {
        return `Modified eat : ${this.name} is eating`;
    }
    run() {
        return `${this.name} is running at ${this.speed}`;
    }
}

//object and instance are same thing just different names
const tommy = new Dog("tommy",3,45);
console.log(tommy.isCute());
console.log(tommy.name);
console.log(tommy.run());
console.log(tommy.eat());
