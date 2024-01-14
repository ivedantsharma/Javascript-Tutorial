//click events on multiple buttons

const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons);
// for(let button of allButtons) {
//     button.addEventListener("click", function() {
//         console.log(this);
//         console.log(this.textContent);
//     })
// }
// for(let i=0;i<allButtons;i++) {
//     allButtons[i].addEventListener("click", function() {
//         console.log(this);
//     })
// }
// allButtons.forEach(function(button) {
//     button.addEventListener("click", function() {
//         console.log(this);
//     })
// })


// event object
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(event) {
//     console.log(event);
// })
// jab bhi mai kisi bhi element pr event listner ko add krunga
// js Engine --- line by line execute karta hai
//  browser --- js Engine + extra features
//  browser ---- js Engine + webAPI

// jab browser ko pta chla ki user ne event perform kia
// jo hum listen kar rhe hai
// browser ------ 2 kaam krega
// 1.) callback function js engine ko dega......
// 2.) callback function ke saath browser jo event hua hai uski information bhi dega
// ye information hume ek object ke form m milegi

for(let button of allButtons) {
    button.addEventListener("click", function(e) {
        console.log(e);
        console.log(e.target);
        console.log(e.currentTarget);
    })
}


