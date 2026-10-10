document.addEventListener("DOMContentLoaded", function() {
    function main() {  
    let todos = []; // store all the todos

    // add three todos
    addTodo(todos, "Walk the dog", 5);
    addTodo(todos, "Clean the room", 3);
    addTodo(todos, "Pay the bill", 2); 
  }
    renderTodos();
  main();

    function renderTodos(todos) {
    const todoList = document.querySelector("#todoList");
    todoList.innerHTML = '';
    for (let todo of todos) { 
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.innerHTML = `
                ${todo.name} <span class="badge bg-primary">${todo.urgency}</span>               
            `;
      todoList.appendChild(li);
    }
  }
});
