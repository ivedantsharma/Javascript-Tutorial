//get multiple elements using getElements by class name and Tag name
//both get class and tag name are same method but with different names only
//get multiple elements items using querySelectorAll


const navItems = document.getElementsByClassName("nav-item");//HTMLCollections
console.log(navItems);
console.log(navItems[2]);
console.log(typeof navItems);
console.log(Array.isArray(navItems));
//we cant use for each method to iterate through HTMLCollections
// for loop, for of loop, foreach loop can be used for HTMLCollcetions

const anchors = document.getElementsByTagName("a");//HTMLCollections
console.log(anchors);
// for(let i=0;i<anchors.length;i++) {
//     // console.log(anchors[i]);
//     const anchor = anchors[i];
//     anchor.style.backgroundColor =  "#fff";
//     anchor.style.color = "green";
//     anchor.style.fontWeight = "bold";
// }

//by for of loop
// for(let anchor of anchors) {
//     // console.log(anchors[i]);
//     anchor.style.backgroundColor =  "#fff";
//     anchor.style.color = "green";
//     anchor.style.fontWeight = "bold";
// }

// we can use for each by changing HTMLCollections to array
// for changing html collections to array we first change const to let in line 14 and then uncomment and run below written code for foreach
//Array.from is used to change to array 
// anchors = Array.from(anchors);
// console.log(Array.isArray(anchors));
// anchors.forEach(anchor => {
//     anchor.style.backgroundColor =  "#fff";
//     anchor.style.color = "green";
//     anchor.style.fontWeight = "bold";
// });


const navItems1 = document.querySelectorAll(".nav-item");//NodeList
console.log(navItems1);
console.log(navItems1[2]);

const anchors1 = document.querySelectorAll("a");
console.log(anchors1);
//in node list we can use every type of loop normally including foreach loop
for(let anchor of anchors1) {
    // console.log(anchors[i]);
    anchor.style.backgroundColor =  "#fff";
    anchor.style.color = "green";
    anchor.style.fontWeight = "bold";
}


//inner html
const headline = document.querySelector(".headline");
console.log(headline.innerHTML);
headline.innerHTML = "<h1> inner html changed</h1>";
console.log(headline.innerHTML);
headline.innerHTML += "<button class = \"btn\"> Learn More </button>";//if we use double quotes under double quotes then it will give error to avoid this we use \ before "btn"
console.log(headline.innerHTML);

// after this file 23 is linked to indexdomtree23.html so refer that file