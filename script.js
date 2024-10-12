let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let divTasks = document.querySelector(".tasks");

// Make an empty array to store the tasks
let arrayOfTasks = [];

// Add task when the submit button is clicked
submit.onclick = function () {
    if (input.value !== "") {
        addTask(input.value); // Call the function to add the task
        input.value = ""; // Clear the input field
    }
};

function addTask(text) {
    // Create a task object
    const task = {
        id: Date.now(),
        title: text,
        completed: false // Task is not completed initially
    };
    arrayOfTasks.push(task); // Add the task to the array
    renderTasks(arrayOfTasks); // Render tasks on the page
}

function renderTasks(tasksArray) {
    divTasks.innerHTML = ""; // Clear the existing tasks

    tasksArray.forEach((task) => {
        let div = document.createElement("div"); // Create a new div for each task
        div.className = "task"; // Set the base class for the task

        // Check if the task is completed and add the "done" class if so
        if (task.completed) {
            div.classList.add("done"); // Use classList.add to avoid overwriting the existing class
        }

        div.setAttribute("data-id", task.id); // Set the task ID as a data attribute
        div.appendChild(document.createTextNode(task.title)); // Add the task title as text

        let span = document.createElement("span"); // Create a delete button
        span.className = "del"; // Set the class for the delete button
        span.appendChild(document.createTextNode("Delete")); // Add text to the delete button
        div.appendChild(span); // Append the delete button to the task div

        divTasks.appendChild(div); // Append the task div to the tasks container
    });}