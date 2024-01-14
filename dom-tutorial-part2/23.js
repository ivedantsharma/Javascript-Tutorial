//parent and child relation
const rootNode = document.getRootNode();
console.log(rootNode);
console.log(rootNode.childNodes);
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode); 
console.log(htmlElementNode.childNodes); 
const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElemenNode = htmlElementNode.childNodes[2];
console.log(headElementNode);
console.log(textNode1);
console.log(bodyElemenNode);
console.log(headElementNode.parentNode);

//sibling relation
console.log(headElementNode.nextSibling);
console.log(headElementNode.nextSibling.nextSibling);
console.log(headElementNode.nextElementSibling);//this property will give direct next sibling omitting text
console.log(headElementNode.childNodes);

const h1 = document.querySelector("h1");
const div = h1.parentNode;
div.style.color = "#efefef";
div.style.background = "#333";
// const body = h1.parentNode.parentNode;
//or we can directly write
const body = document.body;
console.log(body);

const head = document.querySelector("head");
const title = head.querySelector("title");
console.log(title);

const container = document.querySelector(".container");
console.log(container);
console.log(container.childNodes);
console.log(container.children);//this property gives childnode without text

//after this file 24 will link with index.html file so refer that


