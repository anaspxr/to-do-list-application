//* todo list application
const completedButton = `<svg class= "completedButton" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 7 2 C 4.199219 2 2 4.199219 2 7 L 2 34 C 2 36.800781 4.199219 39 7 39 L 34 39 C 36.800781 39 39 36.800781 39 34 L 39 9.8125 L 37 12 L 37 34 C 37 35.699219 35.699219 37 34 37 L 7 37 C 5.300781 37 4 35.699219 4 34 L 4 7 C 4 5.300781 5.300781 4 7 4 L 33.40625 4 L 35.09375 2.09375 C 34.695313 2.09375 34.398438 2 34 2 Z M 36.25 5.34375 L 18.9375 24.59375 L 10.65625 17.25 L 9.34375 18.75 L 18.34375 26.75 L 19.09375 27.40625 L 19.75 26.65625 L 37.75 6.65625 Z M 41 11 L 41 13 L 43 13 C 44.699219 13 46 14.300781 46 16 L 46 43 C 46 44.699219 44.699219 46 43 46 L 16 46 C 14.300781 46 13 44.699219 13 43 L 13 41 L 11 41 L 11 43 C 11 45.800781 13.199219 48 16 48 L 43 48 C 45.800781 48 48 45.800781 48 43 L 48 16 C 48 13.199219 45.800781 11 43 11 Z"/></svg>`;
const completedButtonGif = `<img src="icon/completed.gif" alt="">`;
const trashButton = `<?xml version="1.0" encoding="iso-8859-1"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="trashButton" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="800px" height="800px" viewBox="0 0 408.483 408.483"
	 xml:space="preserve">
<g>
	<g>
		<path d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316
			H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293
			c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329
			c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355
			c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356
			c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"/>
		<path d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916
			c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"/>
	</g>
</g>
</svg>`;
const undoButton = `<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M511.919,254.169c0.034-0.557,0.054-1.117,0.045-1.684c-0.267-16.54-2.36-32.991-6.211-48.952
				c-2.894-11.954-14.937-19.233-26.847-16.406c-11.954,2.872-19.3,14.893-16.429,26.847c3.094,12.755,4.764,25.956,4.964,39.201
				c0.007,0.505,0.038,1.004,0.078,1.5c-0.026,0.438-0.042,0.878-0.042,1.323c0,98.364-79.723,178.087-178.087,178.087
				c-95.187,0-172.913-74.656-177.836-168.615l28.53,28.53c8.693,8.693,22.788,8.693,31.482,0c8.693-8.693,8.693-22.788,0-31.482
				l-66.783-66.783c-8.693-8.693-22.788-8.693-31.482,0L6.52,262.518c-8.693,8.693-8.693,22.788,0,31.482
				c8.693,8.693,22.788,8.693,31.482,0l28.978-28.978c4.736,118.767,102.482,213.585,222.411,213.585
				C412.344,478.606,512,378.951,512,255.998C512,255.381,511.968,254.773,511.919,254.169z"/>
			<path d="M399.48,116.004c10.396,8.17,19.857,17.497,28.138,27.693c4.385,5.409,10.819,8.237,17.297,8.237
				c4.92,0,9.862-1.625,14.002-4.986c9.55-7.724,11.019-21.749,3.25-31.299c-10.351-12.778-22.194-24.42-35.172-34.638
				c-9.683-7.613-23.663-5.944-31.254,3.74C388.149,94.411,389.797,108.39,399.48,116.004z"/>
			<path d="M289.4,77.915c13.245,0,26.468,1.447,39.246,4.341c1.67,0.356,3.295,0.534,4.92,0.534
				c10.173,0,19.367-7.012,21.704-17.363c2.694-11.999-4.831-23.908-16.829-26.624c-16.006-3.584-32.501-5.409-49.041-5.409
				c-12.31,0-22.261,9.973-22.261,22.261S277.09,77.915,289.4,77.915z"/>
		</g>
	</g>
</g>
</svg>`;

// document.querySelector("#currentTasks Button").innerHTML = completedButtonGif;

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const trashedTasks = JSON.parse(localStorage.getItem("trashedTasks")) || [];
const completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
let inputFieldsCount = 1;
listTasks();
listCompleted();
listTrashed();

function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("trashedTasks", JSON.stringify(trashedTasks));
  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}

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
      inputFields[i].value = "";
    }
  }
  saveToLocalStorage();
  listTasks();
}

function createButton(title, symbol, array1, array2, task, i) {
  const newButton = document.createElement("button");
  newButton.title = title;
  newButton.innerHTML = symbol;
  newButton.onclick = () => {
    array1.push(task);
    array2.splice(i, 1);
    saveToLocalStorage();
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
        createButton("move to trash", trashButton, trashedTasks, tasks, task, i)
      );
      buttons.append(" ");
      buttons.appendChild(
        createButton(
          "mark as completed",
          completedButton,
          completedTasks,
          tasks,
          task,
          i
        )
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
      taskDisplay.innerHTML = `<li> ${task} </li>`;
      taskDisplay.appendChild(
        createButton(
          "move back to to-do list",
          undoButton,
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
      taskDisplay.innerHTML = `<li> ${task} </li>`;
      taskDisplay.appendChild(
        createButton(
          "move back to to-do list",
          undoButton,
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
