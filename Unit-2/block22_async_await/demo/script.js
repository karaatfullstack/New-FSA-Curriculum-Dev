const root = document.getElementById('root');
const todoInput = document.getElementById('todo');
const addTodoButton = document.getElementById('addTodo');
const deleteButton = document.querySelector('.delete');
const checkbox = document.querySelector('.checkbox');

const BASE_URL = 'https://crudcrud.com/api/6d2bb40709254d77b876906f9cb654cd';

const todos = [];

const fetchTodos = () => {
    fetch(`${BASE_URL}/todos`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            todos.push(...data);
            renderTodos();
        });
};

fetchTodos();

const renderTodos = () => {
    root.innerHTML = '';
    todos.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo');
        todoElement.innerHTML = `<li key=${todo._id}>
            <input type="checkbox" class="checkbox" ${todo.done} />
            <span>${todo.todo}</span>
            <button class="delete">Delete</button>
        </li>
        `;
        root.appendChild(todoElement);
    });
};

const addTodo = () => {
    fetch(`${BASE_URL}/todos`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            todo: todoInput.value,
            done: false
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            todos.push(data);
            renderTodos();
        });
};

addTodoButton.addEventListener('click', addTodo);

root.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        const id = e.target.parentElement.getAttribute('key');
        deleteTodo(id);
    }
});

const deleteTodo = (id) => {
    fetch(`${BASE_URL}/todos/${id}`, {
        method: 'DELETE'
    })
        .then(data => {
            console.log(data);
            todos.splice(todos.findIndex(todo => todo._id === id), 1);
            renderTodos();
        });
};

// toggle checkbox true or false
const toggleTodo = (id) => {
    fetch(`${BASE_URL}/todos/${id}`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
            todo: todo
        })
    })
        // .then(response => response.json())
        .then(data => {
            console.log(data);
            todos.push(data);
            renderTodos();
        });
};

root.addEventListener('change', (e) => {
    if (e.target.classList.contains('checkbox')) {
        const id = e.target.parentElement.getAttribute('key');
        toggleTodo(id);
    }
});