document
  .getElementById("task-form")
  .addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const title = document.getElementById("task-title").value.trim();
  const description = document.getElementById("task-description").value.trim();
  const priority = document.getElementById("task-priority").value;
  const dueDate = document.getElementById("task-due-date").value;

  if (!title) {
    alert("Please enter a task title.");
    return;
  }

  const task = {
    title,
    description,
    priority,
    dueDate,
    completed: false,
  };

  addTask(task);
  showTasks("All");
  event.target.reset();
}

function getStoredTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function addTask(task) {
  const tasks = getStoredTasks();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(index) {
  const tasks = getStoredTasks();
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks("All");
}

function markComplete(index) {
  const tasks = getStoredTasks();
  tasks[index].completed = true;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks("All");
}

function filterTasks(priority) {
  showTasks(priority);
}

function showTasks(filter = "All") {
  const tasks = getStoredTasks();
  const taskList = document.getElementById("task-list");
  const completedList = document.getElementById("completed-tasks");

  taskList.innerHTML = "";
  completedList.innerHTML = "";

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    return task.priority === filter;
  });

  filteredTasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.className = task.priority.toLowerCase();
    taskItem.innerHTML = `
            <div>
                <strong>${task.title}</strong>
                <p>${task.description}</p>
                <small>Due: ${task.dueDate || "No due date"}</small>
            </div>
            <div class="task-buttons">
                ${
                  !task.completed
                    ? `<button class="complete" onclick="markComplete(${index})">✔️</button>`
                    : ""
                }
                <button onclick="deleteTask(${index})">🗑️</button>
            </div>
        `;

    task.completed
      ? completedList.appendChild(taskItem)
      : taskList.appendChild(taskItem);
  });
}

showTasks("All");
