document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Trim input value

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Stop if task is empty
        }

        // Create a new li element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Add class for styling

        // Assign an event to the remove button to delete the task
        removeButton.onclick = function () {
            taskList.removeChild(listItem); // Remove the li element from the list
        };

        // Append the remove button to the li element
        listItem.appendChild(removeButton);

        // Append the li element to the task list
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = '';
    }

    // Event listener for 'Add Task' button click
    addButton.addEventListener('click', addTask);

    // Event listener for 'Enter' keypress in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
