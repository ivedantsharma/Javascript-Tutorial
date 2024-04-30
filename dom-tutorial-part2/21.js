// DOM
//Document Object Model

console.dir(document);

//select element using get element by id
// console.log(document.getElementById("main-heading"));
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);

// select element using query selector
// console.log(document.querySelector("#main-heading"));
const mainheading = document.querySelector("#main-heading");//for id use #
const header = document.querySelector(".header");//for class use .
// const navItem = document.querySelector(".nav-item");
const navItem = document.querySelectorAll(".nav-item");
console.log(mainheading);
console.log(header);
console.log(navItem);
const div = document.querySelector("div");
console.log(div);//gives first div
const divh2 = document.querySelector("div.headline h2");
console.log(divh2);//gives h2 which is under div which is heaving class headline 



//change text
//textContent and innerText
const mainHeading1 = document.getElementById("main-heading");
console.log(mainHeading1.textContent);
// mainHeading1.textContent = "Vedant Sharma";
// console.log(mainHeading1.textContent);
//inner text will give only text shown on website screen while textContent will give all text
console.log(mainHeading1.innerText);

// uncomment once all to see results
// //change the styes of element
// const mainHeading2 = document.querySelector("div.headline h2");
// mainHeading2.style.color = "blue";
// mainHeading2.style.backgroundColor = "pink";
// mainHeading2.style.border = "10px solid green";


//get and set attribhutes
const Link = document.querySelector("a");
console.log(Link.getAttribute("href"));//getAttribhute is used to get value of attribhutes
console.log(Link.getAttribute("href").slice(1));//just to remove # from previous line output
Link.setAttribute("href", "https://github.com/ivedantsharma");
console.log(Link.getAttribute("href"));

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));

