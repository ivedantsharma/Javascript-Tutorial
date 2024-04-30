// intro to events
// click
// event add karne ke 3 tareeke hai
// 1)directly by indexedDB.html through onclick attribhute
// 2)
const btn = document.querySelector(".btn-headline");
console.log(btn);
// btn.onclick = function() {
//     console.log("you clicked me");
// }
// 3)method -> addEventListner
// this is the best way
// function clickMe() {
//     console.log("you clicked me !!!!!!");
// }
// btn.addEventListener("click", clickMe);//we can write the function directly in it also like below line
// btn.addEventListener("click", function() {
//     console.log("you clicked me !!!!!");
// });
//by arrow function we can write in single line like below
btn.addEventListener("click",  ()=> console.log("you clicked me !!!!!"));

//this keyword
btn.addEventListener("click", function() {
    console.log("you clicked me !!!!!");
    console.log("value of this is");
    console.log(this);
});//in normal function the value of this is button itself
btn.addEventListener("click", ()=> console.log(this));//in arrow function value of this is window or we can say its actual value





