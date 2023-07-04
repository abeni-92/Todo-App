import './style.css';

import { createSideBarLink, newElement, newElementWithClass, setAttributes } from './helper';
// import { addTodo, showDetails } from './script';

const main = document.getElementById('main');

function createNav() {
	const nav = newElementWithClass('div', ['nav']);
	const h1 = newElement('h1', 'TODO');
	const login = newElement('a', 'Login');
	login.classList.add('login-btn');

	nav.append(h1, login);

	return nav;
}

function createSideBar() {
	const sideBar = newElementWithClass('div', ['sidebar']);
	const ul = newElement('ul', '');

	const home = createSideBarLink('Home', '#');
	// let h = home.querySelector('a');
	home.querySelector('a').classList.add('active');
	home.addEventListener('click', () => {
		renderTodos(todos);
		if (home.classList.contains('active')) return
		const elt = ul.querySelector('.active');
		elt.classList.remove('active');
		home.querySelector('a').classList.add('active');
		console.log(ul)
	});

	const today = createSideBarLink('Today', '#');
	today.addEventListener('click', () => {
		handleTodayFilter();
		if (today.classList.contains('active')) return
		const elt = ul.querySelector('.active');
		elt.classList.remove('active');
		today.querySelector('a').classList.add('active');
		console.log(ul)
	});

	const week = createSideBarLink('Week', '#');
	week.addEventListener('click', () => {
		handleWeekFilter();
		if (week.classList.contains('active')) return
		const elt = ul.querySelector('.active');
		elt.classList.remove('active');
		week.querySelector('a').classList.add('active');
		console.log(ul)
	});

	const projects = newElement('li', '');
	projects.setAttribute("id", "projects")
	const span = newElement('span', 'Projects')
	projects.append(span);
	
	const ul2 = newElement('ul', '');
	const gym = createSideBarLink('Gym', '#');
	const study = createSideBarLink('Study', '#');
	ul2.append(gym, study);

	// add button to add todolist
	const add = newElement('li', '');
	const a = newElement('a','');
	const i = newElementWithClass('i', ['fa-circle-plus', 'fa-solid']);
	
	i.setAttribute("id", "add-icon");
	a.append(i);
	add.append(a);

	// opens modal to add Todo
	add.addEventListener("click", () => {
		main.append(createTodoModal());
	});

	ul.append(home, today, week, projects, ul2, add);
	sideBar.append(ul);

	return sideBar;
} 

function handleTodayFilter() {
	const filteredTodos = todos.filter((todo) => isToday(new Date(todo.date)));
	renderTodos(filteredTodos);
}
  
function handleWeekFilter() {
	const filteredTodos = todos.filter(todo => isThisWeek(new Date(todo.date)));
	renderTodos(filteredTodos);
}

function isToday(date) {
	const today = new Date();
	let todoDate = new Date(date);
	todoDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
	
	return todoDate.getDate() === today.getDate() &&
		   todoDate.getMonth() === today.getMonth() &&
		   todoDate.getFullYear() === today.getFullYear();
}

function isThisWeek(date) {
	const today = new Date();
	const weekStart = today.getDate() - today.getDay();
	const weekEnd = weekStart + 6;
	
	return date.getDate() >= weekStart &&
	  date.getDate() <= weekEnd &&
	  date.getMonth() === today.getMonth() &&
	  date.getFullYear() === today.getFullYear();
}
  
function renderTodos(todos) {
	clearTodos();
	const content = document.getElementById('content');

	todos.forEach(todo => {
	  const row = createRow(todo.title, todo.date, todo);
	  content.append(row); 
	});
}

function clearTodos() {
	const content = document.getElementById('content');
	content.innerHTML = '';
}
  
function createContent(){
	const content = newElementWithClass('div', ['content']);
	content.setAttribute('id', 'content');

	if(todos.length == 0){
		console.log('empty')
		const h2 = newElement('h2', '');
		h2.setAttribute('id', 'empty-content')
		h2.textContent = 'Add new Todo!';
		content.append(h2);
	}

	todos.forEach(todo => {
		const row = createRow(todo.title, todo.date, todo);
		content.append(row);
	  });
	
	return content;
}

function createRow(tk, dt, todo) {
	const row = newElementWithClass('div', ['row']);
	const left =newElementWithClass('div', ['left']);
	const right = newElementWithClass('div', ['right'])

	const checkbox = document.createElement('input');
	checkbox.setAttribute("type", "checkbox");
	const task = newElement('p', tk);

	left.append(checkbox, task);

	const details = newElement('button', 'details');
	details.addEventListener("click",  () => {
		main.append(createDetailsModal(todo));
	});
	
	const date = newElement('p', dt);

	const edit = newElementWithClass('i',  ['fa-pen-to-square', 'fa-solid', 'edit']);
	const todoId = todo.id;
	edit.addEventListener("click", () => {
		handleEditTodo(todoId);
	});

	const del = newElementWithClass('i',  ['fa-solid', 'fa-trash-can']);
	del.addEventListener("click", () => {
		handleDeleteTodo(todoId);
	})

	right.append(details, date, edit, del);
	row.append(left, right);

	return row;
	  
}

function handleEditTodo(todoId) {
	// const todoId = this.dataset.todoId;
	const todo = todos.find(todo => todo.id === todoId);

	const todoModal = createTodoModal(todo);
	
	// Pre-fill the form fields with existing todo data
	const titleInput = todoModal.querySelector('input');
	const detailsInput = todoModal.querySelector('textarea');
	const dateInput = todoModal.querySelector('input[type="date"]');
	const selectInput = todoModal.querySelector('select');
	const updateBtn = todoModal.querySelector('button');
	
	titleInput.value = todo.title;
	detailsInput.value = todo.details;
	dateInput.value = todo.date;
	selectInput.value = todo.project;
	updateBtn.textContent = 'Update Todo';
	
	titleInput.addEventListener('input', function() {
		todo.title = titleInput.value;
	});
	
	detailsInput.addEventListener('input', function() {
		todo.details = detailsInput.value;
	});
	
	dateInput.addEventListener('change', function() {
		todo.date = dateInput.value;
	});
	
	selectInput.addEventListener('change', function() {
		todo.project = selectInput.value;
	});

	main.append(todoModal);
	
	// Display the updated todo object
	console.log('Updated Todo:', todo);

}

function handleDeleteTodo(todoId) {

	const tds = todos.filter((todo) => todo.id != todoId);
	addToLocalStorage(tds);
	location.reload();

	console.log(tds);
}

function updateTodo() {
	const title = document.getElementById('title');
	const details = document.getElementById('details');
	const date = document.getElementById('date');
	const select = document.getElementById('project');

	if (title.value == ''){
		title.style.border = '2px solid red';
		title.setAttribute("placeholder", "Title is required"); 
		return
	}
	if (details.value == '') {
		details.style.border = '2px solid red';
		details.setAttribute("placeholder", "details is required"); 
		return
	} 
	if (date.value == '') {
		date.style.border = '2px solid red';
		date.setAttribute("placeholder", "details is required"); 
		return
	}
	if (select.value == 'Select Project') {
		select.style.border = '2px solid red';
		select.setAttribute("placeholder", "select project"); 
		return
	}

	addToLocalStorage();
	location.reload();
}

function createDetailsModal(todo) {
	const modal = newElementWithClass('div', ['details-modal']);
	const modalContent = newElementWithClass('div', ['details-modal-content']);

	const close = newElementWithClass('i', ['fa-solid', 'fa-x']);
	close.addEventListener("click", () =>{
		 modal.classList.remove("modal");
		 modal.remove();
	});

	const title = newElement('h2', todo.title);
	const project = newElement('h4', `Project: ${todo.project}`)
	const dueDate = newElement('h4', `Due date: ${todo.date}`);
	const details = newElement('h4', `Details: ${todo.details}`);
	
	modalContent.append(close, title, project, dueDate, details);
	modal.append(modalContent);

	return  modal;
}

function createTodoModal(todo = null){

	const todoModal = newElementWithClass('div', ['todo-modal']);
	const todoModalContent = newElementWithClass('div', ['todo-modal-content']);

	const todoHeader = newElementWithClass('div', ['todo-header']);
	const h2 = newElement('h2', 'Create New Todo');
	const close = newElementWithClass('i', ['fa-solid', 'fa-x']);
	close.addEventListener("click", () => {
		todoModal.style.display = 'none';
		// location.reload();
	});
	todoHeader.append(h2, close);

	const todoContent = newElementWithClass('div', ['todo-content']);

	const todoSide = newElementWithClass('ul', ['todo-side']);
	const todoLink = createSideBarLink('Todo', '#');
	const projectLink = createSideBarLink('Project', '#');
	const noteLink = createSideBarLink('Note', '#');
	todoSide.append(todoLink, projectLink, noteLink);

	const todoBody = newElementWithClass('div', ['todo-body']);

	const title = newElement('input', '');
	setAttributes(title, {'placeholder': 'Title: push up', 'id':'title'});

	const details = newElement('textarea', '');
	setAttributes(details, {'placeholder': 'details of the task...', 'rows': '10', 'cols':'30', 'id': 'details'})
	
	const date = newElement('input', '');
	date.setAttribute("type", "date");
	date.setAttribute("id", "date");
	date.onchange = () => date.style.border = '2px solid green';

	const select = newElement('select', '');
	select.setAttribute("id", "project")
	const option1 = newElement('option', 'Select Project');
	option1.setAttribute("id", "option1");
	const option2 = newElement('option', 'Gym');
	const option3 = newElement('option', 'home');
	select.append(option1, option2, option3);
	select.onchange = () => select.style.border = '2px solid green';

	const btn = newElementWithClass('button', ['add-btn-todo']);
	btn.textContent = 'Create Todo';

	validateInput(title, 'Title', 'Title: push up');
	validateInput(details, 'Details', 'Details: do 15 reps');

	btn.addEventListener("click", () => {
		if (!todo){
			addTodo();
		} else {
			updateTodo();
		}
	});

	todoBody.append(title, details, date, select, btn);

	todoContent.append(todoSide, todoBody);
	todoModalContent.append(todoHeader, todoContent)
	todoModal.append(todoModalContent);
	
	return todoModal;

}

function addTodo() {
	const title = document.getElementById('title');
	const details = document.getElementById('details');
	const date = document.getElementById('date');
	const select = document.getElementById('project');

	if (title.value == ''){
		title.style.border = '2px solid red';
		title.setAttribute("placeholder", "Title is required"); 
		return
	}
	if (details.value == '') {
		details.style.border = '2px solid red';
		details.setAttribute("placeholder", "details is required"); 
		return
	} 
	if (date.value == '') {
		date.style.border = '2px solid red';
		date.setAttribute("placeholder", "details is required"); 
		return
	}
	if (select.value == 'Select Project') {
		select.style.border = '2px solid red';
		select.setAttribute("placeholder", "select project"); 
		return
	}
	
	const todo = {
		'id': getUniqueId(),
		'title': title.value,
		'details': details.value,
		'date': date.value,
		'project': select.value
	}

	todos.push(todo);
	addToLocalStorage();
	clearTodo();
	location.reload();
	// alert("Successfully added Todo!");

	return todo;

}

function validateInput(input, name, placeholder) {
	input.addEventListener("keyup", () => {
		if (input.value == ''){
			input.style.border = '2px solid red';
			input.setAttribute("placeholder", `${name} is required`);

		} else {
			input.style.border = '2px solid green';
			input.setAttribute("placeholder", placeholder); 
		} 
	})
}

function clearTodo() {
	document.getElementById('title').value = '';
	document.getElementById('details').value = '';
	document.getElementById('date').value = '';
	document.getElementById('project').value = document.getElementById('option1').value;
}

function getUniqueId() {
	let id = 0;
	const todosData = localStorage.getItem('todos');
	if (todosData) {
	  const todos = JSON.parse(todosData);
	  id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
	}
	return id;
  }

function addToLocalStorage(tds = null) {
	if(tds) {
		localStorage.setItem("todos", JSON.stringify(tds));
		return
	}
	localStorage.setItem("todos", JSON.stringify(todos));
}

// function updateLocalStorage() {
// 	localStorage.setItem('todos', JSON.stringify(todos));
// }
  

function getTodosFromLocalStorage() {
	const storedTodos = localStorage.getItem("todos");
	if (storedTodos) {
	  return JSON.parse(storedTodos);
	} else {
	  return [];
	}
  }
  
const todos = getTodosFromLocalStorage();
  
function createBody() {
	const body = newElementWithClass('div', ['body']);
	
	body.append(createSideBar(), createContent());
	
	return body;
}
	
	
export {createNav, createBody, createDetailsModal, createTodoModal};
	
	
	
	
	
