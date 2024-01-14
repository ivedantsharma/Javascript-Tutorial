// document.createElement();
// append
// prepand
// remove

// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("teach students");
// newTodoItem.textContent = "teach student";
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);
// todoList.prepend(newTodoItem);

//first uncomment above lines then uncomment these below lines to see result
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);

// before , after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);


//element.insertAdjacentHTML(where, html)
//beforebegin
//afterbegin
//beforeend
//afterend

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("afterbegin","<li>Teach Student</li>");
// todoList.insertAdjacentHTML("beforebegin","<li>Teach Student</li>");
// todoList.insertAdjacentHTML("afterend","<li>Teach Student</li>");
// todoList.insertAdjacentHTML("beforeend","<li>Teach Student</li>");


//clone nodes
// const ul =  document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);