// import HTML elements from the DOM
const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

async function getTodos() {
    try {
        const response = await fetch(API_URL);
        const todos = await response.json();
        console.log(todos);
        renderTodos(todos);
        return todos;
    } catch (err) {
        console.error(err);
    }
}

// render a list of todos to <ul> with an id of todo-list
function renderTodos(todos) {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''}>
            <span><a href="${API_URL}/${todo.id}">${todo.title}</a></span>
            <button class="delete">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

async function getTodo(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const todo = await response.json();
        return todo;
    } catch (err) {
        console.error(err);
    }
}

// if button class "delete" then delete todo with that id
todoList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('delete')) {
        const id = e.target.parentElement.querySelector('a').href.split('/').pop();
        console.log(id);
        await deleteTodo(id);
        getTodos();
    }
});

async function createTodo(data) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const todo = await response.json();
        confirm('Todo created!');
        console.log(todo);
        return todo;
    } catch (err) {
        console.error(err);
    }
}

async function updateTodo(id, data) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const todo = await response.json();
        return todo;
    } catch (err) {
        console.error(err);
    }
}

async function deleteTodo(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        return response.ok;
    } catch (err) {
        console.error(err);
    }
}

getTodos();

// getTodo(1).then(todo => console.log(todo));
// createTodo({ title: 'Buy milk', completed: false }).then(todo => console.log(todo));
// updateTodo(1, { title: 'Buy eggs', completed: true }).then(todo => console.log(todo));
// deleteTodo(1).then(success => console.log(success));
