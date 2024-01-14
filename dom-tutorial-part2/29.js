console.log("script start !!!!");
const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button) => {
    button.addEventListener("click", function(e) {
        let num=0;
        for(let i=0;i<=100000000;i++) {
            num += i;
        }
        console.log(e.currentTarget.textContent, num);
    })
})

let outerVar = 0;
for(let i = 0;i<=100000000;i++) {
    outerVar += i;
}
console.log("value of outer variable : ", outerVar);
console.log("script end !!!!");


// little practise with click events
allButtons.forEach(button => {
    button.addEventListener("click", (e)=> {
        // console.log(e.target);
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333";
    })
})