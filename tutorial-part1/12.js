//iterables
//jispe hum for of loop lga sake
//string and array are iterables

const firstName = "Vedant";
for(let char of firstName) console.log(char);

//array like objects
//jinke paas length property hoti hai
//aur jinko hum index se access krr sakte hi
// example :- String


//Sets(it is iterable)
//store data
//sets also have its own method
//no indexed based access
//order is not guaranteed
//unique items only(no duplicates allowed)

// const numbers = [1,2,3];
// const numbers = new Set([1,2,3,4]);
items = ["item1","item2","item3"];
const numbers = new Set();//another way of storing data
numbers.add(1);
numbers.add(2);
numbers.add(items);
numbers.add(["item1","item2"]);
numbers.add(["item1","item2"]);

console.log(numbers);
console.log(numbers.has(2));//checks that set contain the provided value or not
for(let number of numbers) console.log(number);

const myarray = [1,2,4,4,5,6,5,6];
const uniqueelements = new Set(myarray);
console.log(uniqueelements);

let le=0;
for(let len of uniqueelements) le++;
console.log(le);



//Maps
//map is an iterable
//store data in ordered fashion
//store key value pair like objects
//duplicate keys are not allowed like objects

//difference bw maps and objects
//objects can only have string or symbol as keys
//in maps you can use anything as key like array, number, string


//object literal
// key -> string and Symbol
const person = {
    firstname: "Vedant",
    age: 7,
};
//console.log(person.firstname);
// console.log(person["firstname"]);
// console.log(person[1]);
for (const key in person) {
    console.log(typeof key);
}

// const person1 = new Map([["firstname","Vedant"],["age",7],[[1,2,3],"halelua"],[1,"one"]]);
const person1 = new Map();
person1.set("firstname","Vedant");
person1.set("age",7);
person1.set(1,"one");
person1.set([1,2,3],"halelua")
console.log(person1);
console.log(person1.get("age"));
console.log(person1.keys());
for(let key of person1.keys()) console.log(key,typeof key);

//we can use array destructing in for of loop
for(let [key,value] of person1) console.log(key,value);


const person2 = {
    id: 1,
    firstname: "Vedant",
}

const extrainfo = new Map();
extrainfo.set(person2,{age: 8, gender: "male"});
console.log(extrainfo);
console.log(person2.id);
console.log(extrainfo.get(person2));
console.log(extrainfo.get(person2).gender);

//clone using object.assign

const obj = {
    key1: "value1",
    key2: "value2",
};

// const obj2 = {...obj};
const obj2 = Object.assign({},obj);
console.log(obj);
console.log(obj2);

//optional chaining
//it is used to avoid error and give undefined instead of error
const user = {
    firstname: "Vedant",
    // address: {housenumber: "1234"},
}


console.log(user?.firstname);//? tells that if user exist than give me first name and if dont exist then give me undefined
console.log(user?.address?.housenumber);


//methods
//method is known as function inside a object
