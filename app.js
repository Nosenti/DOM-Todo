const saveBtn = document.getElementById("save");
const form = document.getElementsByClassName("todo-form");

const todoInput = document.getElementById("todo");
const checkboxInput = document.getElementById("checkbox");
const dateInput = document.getElementById("date");

saveBtn.addEventListener("click", addTodo);

function clearTheform() {
  todoInput.value = "";
  checkboxInput.value = "unchecked";
  dateInput.value = "";
}

function addTodo() {
  const todoText = todoInput.value;
  const checkbox = checkboxInput;
  const date = dateInput.value;

  //get the todos container
  const todoContainer = document.getElementById("todos-container");

  //create the new div to append to container
  const todoDiv = document.createElement("div");
  const todoTextDiv = document.createElement("div");
  const todoDateDiv = document.createElement("div");

  todoDiv.classList.add("todo");
  todoTextDiv.classList.add("todo-text");
  todoDateDiv.classList.add("todo-date");

  todoTextDiv.innerText = todoText;
  todoDateDiv.innerText = date;
  console.log(checkbox.checked);
  if (checkbox.checked == true) {
    console.log("checkbox is checked");
    todoDiv.classList.add("checked-todo");
  } else {
    console.log("checkbox is unchecked");
    todoDiv.classList.add("unchecked-todo");
  }

  todoDiv.appendChild(todoTextDiv);
  todoDiv.appendChild(todoDateDiv);

  todoContainer.appendChild(todoDiv);
  clearTheform();
}
