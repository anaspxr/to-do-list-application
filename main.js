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
const permaDelete = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
<path d="M11.681 2.41458C11.7194 2.55015 11.874 2.66 12.0286 2.66H15.0175C15.5603 2.66 16 3.05682 16 3.54666C16 3.95141 15.6996 4.29181 15.2906 4.39869L14.7774 17.1327C14.7358 18.1687 13.7807 19 12.6294 19H3.37062C2.22147 19 1.26424 18.1678 1.22258 17.1327L0.709425 4.39869C0.300438 4.29181 0 3.95141 0 3.54666C0 3.05682 0.439696 2.66 0.982467 2.66H3.97141C4.12602 2.66 4.28173 2.54817 4.31901 2.41458L4.52844 1.65557C4.78831 0.717461 5.80587 0 6.87606 0H9.12388C10.1952 0 11.2116 0.717436 11.4715 1.65557L11.681 2.41458ZM7.29835 6.71337V15.3267C7.29835 15.676 7.61305 15.96 8.00011 15.96C8.38718 15.96 8.70187 15.676 8.70187 15.3267V6.71337C8.70187 6.36405 8.38718 6.08004 8.00011 6.08004C7.61305 6.08004 7.29835 6.36405 7.29835 6.71337ZM4.07025 6.73217L4.35095 15.3455C4.36301 15.6948 4.68648 15.9699 5.07354 15.96C5.46061 15.9491 5.76542 15.6572 5.75448 15.3079L5.47377 6.69458C5.46171 6.34526 5.13824 6.07016 4.75118 6.08004C4.36412 6.09093 4.0593 6.38285 4.07025 6.73217ZM10.5265 6.69457L10.2458 15.3078C10.2348 15.6572 10.5396 15.9491 10.9267 15.96C11.3137 15.9699 11.6372 15.6948 11.6493 15.3454L11.93 6.73216C11.9409 6.38284 11.6361 6.09093 11.249 6.08003C10.862 6.07014 10.5385 6.34525 10.5265 6.69457ZM6.41553 2.66H9.58441C9.66117 2.66 9.70941 2.60558 9.69077 2.53829L9.56467 2.08505C9.5241 1.93661 9.29274 1.77332 9.12388 1.77332H6.87606C6.7072 1.77332 6.47583 1.93661 6.43527 2.08505L6.30917 2.53829C6.29053 2.60657 6.33877 2.66 6.41553 2.66H6.41553Z" fill="#EB5757"/>
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

function createButton(title, symbol, task, i, array1, array2) {
  const newButton = document.createElement("button");
  newButton.title = title;
  newButton.innerHTML = symbol;
  newButton.onclick = () => {
    if (array2) {
      array1.push(task);
      array2.splice(i, 1);
      saveToLocalStorage();
      listTasks();
      listTrashed();
      listCompleted();
    } else {
      console.log(array1);
      confirm("Do you really want to delete this task permanently?") &&
        array1.splice(i, 1);
      saveToLocalStorage();
      listTasks();
      listTrashed();
      listCompleted();
    }
  };
  return newButton;
}

function listTasks() {
  document.getElementById("currentTasks").innerHTML = "";
  if (tasks.length) {
    tasks.forEach((task, i) => {
      const buttons = document.createElement("span");
      buttons.appendChild(
        createButton("move to trash", trashButton, task, i, trashedTasks, tasks)
      );
      buttons.append(" ");
      buttons.appendChild(
        createButton(
          "mark as completed",
          completedButton,
          task,
          i,
          completedTasks,
          tasks
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
          task,
          i,
          tasks,
          completedTasks
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
      const buttons = document.createElement("span");
      buttons.appendChild(
        createButton("Delete permanently", permaDelete, task, i, trashedTasks)
      );
      buttons.append(" ");
      buttons.appendChild(
        createButton(
          "move back to to-do list",
          undoButton,
          task,
          i,
          tasks,
          trashedTasks
        )
      );
      const taskDisplay = document.createElement("p");
      taskDisplay.className = "tasksInList";
      taskDisplay.innerHTML = `<li> ${task} </li>`;
      taskDisplay.appendChild(buttons);
      document.getElementById("trashedTasks").appendChild(taskDisplay);
    });
  } else {
    document.getElementById(
      "trashedTasks"
    ).innerHTML = ` <p>You have no trashed tasks right now!!</p>
  <p>The trashed tasks will appear here</p>`;
  }
}
