// Get elements
const taskInput = document.getElementById('task-input');
const taskPriority = document.getElementById('task-priority');
const taskDueDate = document.getElementById('task-due-date');
const addTaskBtn = document.getElementById('add-task-btn');
const taskListUl = document.getElementById('task-list-ul');
const categoryInput = document.getElementById('category-input');
const addCategoryBtn = document.getElementById('add-category-btn');
const categoryListUl = document.getElementById('category-list-ul');

// Task array
let tasks = [];

// Add task event listener
addTaskBtn.addEventListener('click', addTask);

// Add task function
function addTask() {
    const taskName = taskInput.value.trim();
    const taskPriorityValue = taskPriority.value;
    const taskDueDateValue = taskDueDate.value;
    if (taskName) {
        const task = {
            name: taskName,
            priority: taskPriorityValue,
            dueDate: taskDueDateValue,
            complete: false
        };
        tasks.push(task);
        taskInput.value = '';
        taskPriority.value = 'low';
        taskDueDate.value = '';
        renderTaskList();
    }
}

// Render task list function
function renderTaskList() {
    taskListUl.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
<span class="task-name">${task.name}</span>
<span class="task-priority">${task.priority}</span>
<span class="task-due-date">${task.dueDate}</span>
<button class="task-complete-btn">${task.complete ? 'Undo' : 'Complete'}</button>
<button class="task-delete-btn">Delete</button>
`;
        taskListUl.appendChild(taskItem);
        const completeBtn = taskItem.querySelector('.task-complete-btn');
        completeBtn.addEventListener('click', () => {
            task.complete = !task.complete;
            renderTaskList();
        });
        const deleteBtn = taskItem.querySelector('.task-delete-btn');
        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTaskList();
        });
    });
}

// Add category event listener
addCategoryBtn.addEventListener('click', addCategory);

// Add category function
function addCategory() {
    const categoryName = categoryInput.value.trim();
    if (categoryName) {
        const category = {
            name: categoryName,
            tasks: []
        };
        categories.push(category);
        categoryInput.value = '';
        renderCategoryList();
    }
}

// Render category list function
function renderCategoryList() {
    categoryListUl.innerHTML = '';
    categories.forEach((category, index) => {
        const categoryItem = document.createElement('li');
        categoryItem.className = 'category-item';
        categoryItem.innerHTML = `
<span class="category-name">${category.name}</span>
<button class="category-delete-btn">Delete</button>
`;
        categoryListUl.appendChild(categoryItem);
        const deleteBtn = categoryItem.querySelector('.category-delete-btn');
        deleteBtn.addEventListener('click', () => {
            categories.splice(index, 1);
            renderCategoryList();
        });
    });
}