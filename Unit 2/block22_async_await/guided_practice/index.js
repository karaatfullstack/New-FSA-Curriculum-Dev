// import the tasks array from the taskList.js file
import tasks from './assets/taskList.js';

// index.js
const taskList = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');

// create a new task element
const createTaskElement = (task) => {
    const li = document.createElement('li');
    li.innerHTML = task;
    return li;
};

// add a task to the task list
const addTask = (task) => {
    const li = createTaskElement(task);
    taskList.appendChild(li);
};

// add a task to the task list when the form is submitted
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask(taskInput.value);
    taskInput.value = '';
});

// add all of the tasks to the task list
const addAllTasks = (tasks) => {
    tasks.forEach((task) => {
        addTask(task);
    });
};

// call the addAllTasks function
addAllTasks(tasks);
