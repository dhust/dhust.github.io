var todoList = [];

// When the webpage initially loads
window.addEventListener("load", () => {

// Get the todos from storage
let storedTodos = localStorage.getItem('todos');

// If there's todos stored
if (storedTodos != null) {
// Turn the JSON string into an actual list
todoList = JSON.parse(storedTodos);

// Add todos from the todoList
for (let i = 0; i < todoList.length; i++) { loadTodo(todoList[i]); } } // Puts cursor in the input box automatically let
    inputEl=document.querySelector('#input-todo'); inputEl.focus(); }); // Add listener to button let
    buttonEl=document.querySelector("#submit-todo"); buttonEl.addEventListener('click', (event)=> {
    addTodo();
    });

    let inputEl = document.querySelector('#input-todo');
    inputEl.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
    addTodo();
    }
    })

    function addTodo() {
    // Get the value from the input
    let inputEl = document.querySelector('#input-todo');
    let todo = inputEl.value;

    if (todo == "") return;

    // Add todo to localStorage
    todoList.push(todo);
    localStorage.setItem('todos', JSON.stringify(todoList));

    loadTodo(todo);

    // Reset the input to be blank
    inputEl.value = "";

    // Puts cursor in the input box automatically
    inputEl.focus();
    }

    function loadTodo(todo) {
    // Get the todo list element from the document
    let todosListEl = document.querySelector("#todos-list");

    // Create a new div that will contain the todo item to be added
    const newTodoDiv = document.createElement("div");

    // Add the "todo" class so that it's styled properly
    newTodoDiv.classList.add("todo");

    // Add the todo text to the new div we just made
    // newTodoDiv.innerHTML = todo + "<span class='delete'>x</span>\n";
    // deleteEl = newTodoDiv.children[0];
    newTodoDiv.innerHTML = todo;

    // Add the eventListener to the delete button
    newTodoDiv.addEventListener('click', function () {

    // Get the container that has all of the todo elements inside
    todoEls = document.querySelector("#todos-list");

    // Remove the item from the todoList
    todoEls.removeChild(this);

    todoList = todoList.filter(function(item) {
    return item !== todo;
    });

    localStorage.setItem("todos", JSON.stringify(todoList));

    });

    // Add the todo div to the page
    todosListEl.appendChild(newTodoDiv);
    }