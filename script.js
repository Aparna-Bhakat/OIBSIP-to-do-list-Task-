const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = createTaskItem(taskText);
    pendingList.appendChild(taskItem);
    taskInput.value = ""; 
    
  }
}

function createTaskItem(taskText) {
  const li = document.createElement("li");
  const task = document.createElement("span");
  task.textContent = taskText;
  
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.addEventListener("click", () => completeTask(li, taskText));
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => deleteTask(li));
  
  li.appendChild(task);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  
  return li;
}

function completeTask(taskItem, taskText) {
  const completedItem = createTaskItem(taskText);
  completedList.appendChild(completedItem);
  taskItem.remove();

  function completeTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.classList.add('completed');
    completedList.appendChild(taskItem);
    saveTasksToStorage();
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
    
}
  
}

function deleteTask(taskItem) {
  taskItem.remove();
  
}