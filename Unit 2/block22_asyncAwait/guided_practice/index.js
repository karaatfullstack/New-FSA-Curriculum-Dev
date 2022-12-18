// index.js
const taskList = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');

async function getTasks() {
  const response = await fetch('/tasks');
  const tasks = await response.json();
  return tasks;
}

function renderTasks(tasks) {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = task;
    taskList.appendChild(li);
  });
}

taskForm.addEventListener('submit', async event => {
  event.preventDefault();
  const task = taskInput.value;
  if (task) {
    taskInput.value = '';
    const response = await fetch('/tasks', {
      method: 'POST',
      body: JSON.stringify({ task }),
      headers: { 'Content-Type': 'application/json' }
    });
    const tasks = await getTasks();
    renderTasks(tasks);
  }
});

getTasks().then(tasks => renderTasks(tasks));
