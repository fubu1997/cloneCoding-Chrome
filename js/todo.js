const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const toDos = [];

// ToDo를 Localstorage에 저장하는 함수
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); //JSON.stringify 는 모든요소들을 문자열로 변환
}

// ToDo를 삭제하는 함수
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

// ToDo를 HTML요소에 보여주는 함수
function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
  button.innerText = "❌";
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// ToDo를 입력하는 함수
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

//ToDo 입력폼에 입력('submit')해서 함수호출
toDoForm.addEventListener('submit', handleToDoSubmit);