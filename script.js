const newTaskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
	if (newTaskInput.value !== "") {
		const newTask = document.createElement("li");
		newTask.textContent = newTaskInput.value;
		taskList.appendChild(newTask);
		newTaskInput.value = "";
	}
}
