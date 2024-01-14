//some old method to support poor Internet explorer
// appendChild
// insertBefore
// replaceChild
// removeChild

// const ul = document.querySelector(".todo-list");
// new element
// const li = document.createElement("li");
// li.textContent = "new todo";
// reference node
// const refrenceNode = document.querySelector(".first-todo");

// ul.appendChild(li);
// ul.insertBefore(li,refrenceNode);
// ul.replaceChild(li, refrenceNode);
// ul.removeChild(refrenceNode);


//uncomment line 51 to 55 in index.html file to see result for this
//static list vs live list
//queryselectorAll hume static list denge lkin getelementsbysomething hume live list denge
// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByClassName("li");

// const listItems = document.querySelectorAll(".todo-list li");
// const ul = document.querySelector(".todo-list");

// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// ul.append(sixthLi);
// console.log(listItems);


//how to get the dimension of element
//height width

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
const info1 = sectionTodo.getBoundingClientRect().height;
const info2 = sectionTodo.getBoundingClientRect().width;
console.log(info);
console.log(info1);
console.log(info2);


