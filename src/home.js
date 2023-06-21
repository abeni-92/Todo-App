import './style.css';

import { createSideBarLink, newElement, newElementWithClass } from './helper';
import { addTodo, showDetails } from './script';

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
	const today = createSideBarLink('Today', '#');
	const week = createSideBarLink('Week', '#');

	const projects = newElement('li', '');
	projects.setAttribute("id", "projects")
	const span = newElement('span', 'Projects')
	projects.append(span);
	
	const ul2 = newElement('ul', '');
	const gym = createSideBarLink('Gym', '#');
	const study = createSideBarLink('Study', '#');
	ul2.append(gym, study);

	const notes = createSideBarLink('Notes', '#');

	// add button to add todolist
	const add = newElement('li', '');
	const a = newElement('a','');
	const i = newElementWithClass('i', ['fa-circle-plus', 'fa-solid']);
	
	i.setAttribute("id", "add-icon");
	a.append(i);
	add.append(a);

	// opens modal to add Todo
	add.addEventListener("click", addTodo);

	ul.append(home, today, week, projects, ul2, notes, add);
	sideBar.append(ul);

	return sideBar;
} 

function createContent(){
	const content = newElementWithClass('div', ['content']);
	
	const row1 = createRow('Play guitar', '16th june');
	const row2 = createRow('Study', 'june 17th');
	const row3 = createRow('Play guitar', '16th june');
	const row4 = createRow('Study', 'june 17th');
	const row5 = createRow('buy grocery', '20th june');
	const row6 = createRow('listen podcast', 'june 22nd');

	content.append(row1, row2, row3, row4, row5, row6);
	// content.append(row2);
	// content.append(row3);
	// content.append(row4);
	// content.append(row5);
	// content.append(row6);

	return content;
}

function createRow(tk, dt) {
	const row = newElementWithClass('div', ['row']);
	const left =newElementWithClass('div', ['left']);
	const right = newElementWithClass('div', ['right'])

	const checkbox = document.createElement('input');
	checkbox.setAttribute("type", "checkbox");
	const task = newElement('p', tk);

	left.append(checkbox, task);

	const details = newElement('button', 'details');
	details.addEventListener("click",  showDetails);
	
	const date = newElement('p', dt);

	const edit = newElementWithClass('i',  ['fa-pen-to-square', 'fa-solid']);
	const del = newElementWithClass('i',  ['fa-solid', 'fa-trash-can'])

	right.append(details, date, edit, del);
	row.append(left, right);

	return row;
}

function detailsModal() {
	const modal =newElementWithClass('div', ['modal']);
	const modalContent = newElementWithClass('div', ['modal-content']);

	const close = newElementWithClass('i', ['fa-solid', 'fa-x']);
	close.addEventListener("click", () =>{
		 modal.classList.remove("modal");
		 modal.remove();
	});

	const title = newElement('h2', 'Some title');
	const project = newElement('h4', 'Project: ')
	const priority = newElement('h4', 'Priority: ');
	const dueDate = newElement('h4', 'Due date: ');
	const details = newElement('h4', 'Details: ');
	
	const span1 = newElement('span', 'Today');
	const span2 = newElement('span', 'Medium');
	const span3 = newElement('span', 'june 16th, 2023');
	const span4 = newElement('span', 'some details');

	project.append(span1);
	priority.append(span2);
	dueDate.append(span3);
	details.append(span4);
	
	modalContent.append(close, title, project, priority, dueDate, details);
	modal.append(modalContent);

	return  modal;
}

function addTodoModal(){

	const todoModal = newElementWithClass('div', ['todo-modal']);
	const todoModalContent = newElementWithClass('div', ['todo-modal-content']);
	const todoHeader = newElementWithClass('div', ['todo-header']);

	const h2 = newElement('h2', 'Create New Todo');
	const close = newElementWithClass('i', ['fa-solid', 'fa-x']);

	const todoContent = newElementWithClass('div', 'todo-content');

	const todoSide = newElementWithClass('ul', ['todo-side']);
	

	// <div class="todo-modal">
	// 				<div class="todo-modal-content">
	// 					<div class="todo-header">
	// 						<h2>Create new todo</h2>
	// 						<a href="#"><i class="fa-solid fa-x"></i></a>
	// 					</div>
	// 					<div class="todo-content">
	// 						<ul class="todo-side">
	// 							<li><a href="#" class="link active" data-name="Todo">Todo</a></li>
	// 							<li><a href="#" class="link" data-name="Project">Project</a></li>
	// 							<li><a href="#" class="link" data-name="Note">Note</a></li>
	// 						</ul>
	// 						<div class="border"></div>
	// 						<div class="todo-body">
	// 							<input type="text" name="title" id="title" placeholder="Title: Study" required>
	// 							<textarea name="details" id="details" class="input" cols="40" rows="10" placeholder="Details: eg AI,Cyber.. " required></textarea>
	// 							<input type="date" name="date" class="input" minDate="0" id="date">		
	// 							<select name="pro" id="pro">
	// 								<option value="" disabled selected>select project</option>
	// 								<option value="1">gym</option>
	// 								<option value="2">study</option>
	// 							</select>					
	// 							<button class="add-btn-todo" id="create-todo">Create <span id="task-btn">Todo</span></button>
	// 						</div>
	// 						<div class="todo-body project hidden">
	// 							<input type="text" name="project" id="project" placeholder="Title: Building" required>	
	// 							<button class="add-btn-todo" id="create-project">Create <span id="task-btn">Project</span></button>
	// 						</div>
	// 						<div class="todo-body note hidden">
	// 							<input type="text" name="note" id="note" placeholder="Title:" required>	
	// 							<textarea name="details" id="note-details" cols="40" rows="10" placeholder="Details:" required></textarea>
	// 							<button class="add-btn-todo" id="create-note">Create <span id="task-btn">Note</span></button>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</div>
}

function createBody() {
	const body = newElementWithClass('div', ['body']);
	
	body.append(createSideBar(), createContent());

	return body;
}


function createTodo() {
	const todo = newElement('div', '');
	todo.classList.add('modal');

	const header = newElement('div', '');
	const htext = newElement('p', 'Create new Todo..');
	const deleteClass  = ['fa-regular', 'fa-circle-xmark'];
	const del = document.createElement('i');
	del.classList.add(...deleteClass);
	del.style.fontSize = '1.5rem';

	header.classList.add('todo-header');
	header.append(htext, del);
	
	const sideTodo = newElement('div', '');
	sideTodo.classList.add('sideTodo');
	const rightTodo = newElement('div', '');
	rightTodo.classList.add('rightTodo');
	
	const title = newElement('input', '');
	title.setAttribute("placeholder", "title")
	const details = newElement('textarea', '');
	details.setAttribute("placeholder", "details:")
	const dt = newElement('input', '');
	dt.setAttribute('type', 'date');
	// const priority
	
	const TODO = createSideBarLink('To Do', '#');
	const project = createSideBarLink('Project', '#');
	const note = createSideBarLink('Note', '#');
	
	sideTodo.append(TODO, project, note);
	rightTodo.append(title, details, dt);
	
	const todoContent = newElement('div', '')
	todoContent.classList.add('todo-content');
	todoContent.append(sideTodo, rightTodo);

	const allContent = newElement('div', '');
	allContent.append(header, todoContent);
	allContent.classList.add('modal-content');

	todo.append(allContent);
	
	return todo;
}



export {createNav, createBody, createTodo, detailsModal};