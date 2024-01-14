// console.log("script start !");

// for(let i = 1;i<10000;i++) {
//     console.log("inside my function");
// }

// console.log("script end !");


// setTimeout
console.log("script start");
const id = setTimeout(()=> {
    console.log("inside setTimeout");
},1000);
for(let i=0;i<100;i++) {
    console.log("....");
}

console.log("setTimeout id is", id);
console.log("clearing time out");
clearTimeout(id);//this will stop the settimeout
console.log("script end");


//setInterval
console.log("script start");
setInterval(()=>{
    let total = 0;
    for(let i =0;i<100000000;i++) {
        total += i;
    }
    console.log(total);
    console.log(Math.random());
},500);
console.log("script end");