// script.js

document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    // Add a new task when the button is clicked
    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = ""; // Clear the input field
        }
    });

    // Function to add a task to the list
    function addTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Add a delete button to the task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});
