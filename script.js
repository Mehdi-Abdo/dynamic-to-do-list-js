document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new li element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign an onclick event to remove the task from the list
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the li element
        listItem.appendChild(removeButton);

        // Append the li element to the task list
        taskList.appendChild(listItem);

        // Clear the task input field after adding the task
        taskInput.value = '';
    }

    // Event listener for adding a task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Event listener for adding a task when the "Enter" key is pressed
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke addTask function on DOMContentLoaded
});

// Function to add a new task
function addTask() {
    // Retrieve and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;  // Exit the function if no task is entered
    }

    // Create a new li element for the task
    const listItem = document.createElement('li');
    listItem.textContent = taskText;  // Set taskText as the text content of the li

    // Create a remove button for the task
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";  // Set the button's text to "Remove"
    removeButton.className = 'remove-btn';  // Give the button a class for styling if needed

    // Assign an onclick event to the remove button that removes the task
    removeButton.onclick = function() {
        taskList.removeChild(listItem);  // Remove the li element from the task list
    };

    // Append the remove button to the li element
    listItem.appendChild(removeButton);

    // Append the li element to the task list
    taskList.appendChild(listItem);

    // Clear the task input field
    taskInput.value = '';  // Reset the input field to an empty string
}



document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize tasks array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to save tasks to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from Local Storage
    function loadTasks() {
        tasks.forEach(function(taskText) {
            addTaskToDOM(taskText);
        });
    }

    // Function to add task to the DOM
    function addTaskToDOM(taskText) {
        // Create a new li element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign an event to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(listItem);

            // Remove task from tasks array and update Local Storage
            tasks = tasks.filter(task => task !== taskText);
            saveTasks();
        };

        // Append the remove button to the li element
        listItem.appendChild(removeButton);

        // Append the li element to the task list
        taskList.appendChild(listItem);
    }

    // Function to add a task
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Add task to the DOM
        addTaskToDOM(taskText);

        // Add task to the tasks array
        tasks.push(taskText);

        // Save tasks to Local Storage
        saveTasks();

        // Clear the task input field
        taskInput.value = '';
    }

    // Add event listener to addButton for adding a task
    addButton.addEventListener('click', addTask);

    // Add event listener for pressing Enter to add a task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});
