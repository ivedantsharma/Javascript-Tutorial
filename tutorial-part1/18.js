//getters and setters
class Person {
    constructor(firstname,lastname,age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    // setName(firstname,lastname) {
    //     this.firstname = firstname;
    //     this.lastname = lastname;
    // }
    set fullName(fullName) {
        const [firstname, lastname] = fullName.split(" ");
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

const person1 = new Person("vedant", "sharma", 19);
console.log(person1);
// console.log(person1.fullName());
//we cant use above code and have to use below code which is calling function by removing paranthesis
//by using get before function we made the function a property
//not we can use fullname as a property and not a function
console.log(person1.fullName);
// person1.setName("mohit","vashisth");
person1.fullName = "mohit chikara";
console.log(person1.firstname);
console.log(person1.lastname);


//static methods and properties
//by using static we can directly access function and properties using class name
class Person1 {
    constructor(firstname,lastname,age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    static classInfo() {
        return `this is person class`;
    }
    static desc = "static property";
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    // setName(firstname,lastname) {
    //     this.firstname = firstname;
    //     this.lastname = lastname;
    // }
    set fullName(fullName) {
        const [firstname, lastname] = fullName.split(" ");
        this.firstname = firstname;
        this.lastname = lastname;
    }
    eat() {
        return `${this.firstname} is eating`;
    }
    isSuperCute() {
        return this.age<=1;
    }
    isCute() {
        return true;
    }
}


const person2 = new Person1("vedant","sharma",19);
console.log(person2.eat());
const info = Person1.classInfo();
console.log(info);
console.log(Person1.desc);