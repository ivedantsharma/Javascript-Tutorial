const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo);
console.log(sectionTodo.classList);

// sectionTodo.classList.add('bg-dark');
// sectionTodo.classList.remove("container");
const ans = sectionTodo.classList.contains("container");
console.log(ans);
// sectionTodo.classList.toggle("bg-dark");//toggle helps to delete the class if it exist and add the class if it not exist

const header = document.querySelector(".header");

console.log(header.classList);
// header.classList.add('bg-dark');

//add new html elements to page
//innerHTML to add html element
//we should use this only if we want to change whole inner element as it is good
const todoList = document.querySelector(".todo-list")
console.log(todoList.innerHTML);
// todoList.innerHTML = "<li>New Todo</li>";

// todoList.innerHTML += "<li>New Todo</li>";
