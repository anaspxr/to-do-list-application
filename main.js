//* todo list application
const tasks = [];
const trashedTasks = [];
const completedTasks = [];
let inputFieldsCount = 1;

function newInputBox() {
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.className = "newTasks";
  document.getElementById("taskInputField").appendChild(inputField);
  inputFieldsCount++;
}

function removeInputBox() {
  if (inputFieldsCount > 1) {
    const container = document.getElementById("taskInputField");
    container.removeChild(container.lastChild);
    inputFieldsCount--;
  }
}

function addTask() {
  const inputFields = document.getElementsByClassName("newTasks");
  for (let i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value) {
      tasks.push(inputFields[i].value);
    }
  }
  listTasks();
}

function createButton(title, symbol, array1, array2, task, i) {
  const newButton = document.createElement("button");
  newButton.title = title;
  newButton.innerText = symbol;
  newButton.onclick = () => {
    array1.push(task);
    array2.splice(i, 1);
    listTasks();
    listTrashed();
    listCompleted();
  };
  return newButton;
}

function listTasks() {
  document.getElementById("currentTasks").innerHTML = "";
  if (tasks.length) {
    tasks.forEach((task, i) => {
      const buttons = document.createElement("span");
      buttons.appendChild(
        createButton("move to trash", "🗑", trashedTasks, tasks, task, i)
      );
      buttons.append(" ");
      buttons.appendChild(
        createButton("mark as completed", "✔", completedTasks, tasks, task, i)
      );
      const taskDisplay = document.createElement("p");
      taskDisplay.className = "tasksInList";
      taskDisplay.innerHTML = `Task ${i + 1} : ${task}`;
      taskDisplay.appendChild(buttons);
      document.getElementById("currentTasks").appendChild(taskDisplay);
    });
  } else {
    document.getElementById(
      "currentTasks"
    ).innerHTML = ` <p>You have no new tasks right now!!</p>
  <p>You can Add new tasks down below</p>`;
  }
}

function listCompleted() {
  document.getElementById("completedTasks").innerHTML = "";
  if (completedTasks.length) {
    completedTasks.forEach((task, i) => {
      const taskDisplay = document.createElement("p");
      taskDisplay.className = "tasksInList";
      taskDisplay.innerHTML = `Task ${i + 1} : ${task}`;
      taskDisplay.appendChild(
        createButton(
          "move back to to-do list",
          "↺",
          tasks,
          completedTasks,
          task,
          i
        )
      );
      document.getElementById("completedTasks").appendChild(taskDisplay);
    });
  } else {
    document.getElementById(
      "completedTasks"
    ).innerHTML = ` <p>You have no completed tasks right now!!</p>
  <p>The completed tasks will appear here</p>`;
  }
}

function listTrashed() {
  document.getElementById("trashedTasks").innerHTML = "";
  if (trashedTasks.length) {
    trashedTasks.forEach((task, i) => {
      const taskDisplay = document.createElement("p");
      taskDisplay.className = "tasksInList";
      taskDisplay.innerHTML = `Task ${i + 1} : ${task}`;
      taskDisplay.appendChild(
        createButton(
          "move back to to-do list",
          "↺",
          tasks,
          trashedTasks,
          task,
          i
        )
      );
      document.getElementById("trashedTasks").appendChild(taskDisplay);
    });
  } else {
    document.getElementById(
      "trashedTasks"
    ).innerHTML = ` <p>You have no trashed tasks right now!!</p>
  <p>The trashed tasks will appear here</p>`;
  }
}
