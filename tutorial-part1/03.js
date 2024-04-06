//while loop
let i=0;
while(i<=3) {
    console.log(i);
    i++; 
}
console.log(i);
//for loop
let sum=0;
for(let j=0;j<5;j++) {
    sum=sum+j;
}
console.log(sum); 
//do while loop
let k=0;
do {
    console.log(k);
    k++;
}
while(k<=5);


//Arrays
let fruits = ["apple","mango","banana"];
let number = [1,2,3,4];
let mixed = [1,2,3.56,"string",null,undefined,5];
let obj = {};//object literal
console.log(fruits);
console.log(number);
console.log(mixed);
console.log(obj);
console.log(fruits[2]);
console.log(mixed[4]);
fruits[1]="grapes";
console.log(fruits);
console.log(typeof fruits);//arrays are objects
console.log(typeof obj);
console.log(Array.isArray(fruits));//checks that the given argument is array or not

//array push pop
fruits.push("orange");
console.log(fruits);
let poppedFruit = fruits.pop();
console.log(fruits.pop());
console.log(fruits);
console.log(poppedFruit);

//array shift unshift
fruits.unshift("banana");
fruits.unshift("tomato");
console.log(fruits);
let removedFruits = fruits.shift();
fruits.shift();
console.log(fruits);
console.log(removedFruits);
//push pop are better then shift and unshift as they are fast
