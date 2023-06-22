import './style.css';

import { createSideBarLink, newElement, newElementWithClass, setAttributes } from './helper';
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
	add.addEventListener("click", () => {
		addTodo();
		console.log('clicked');
	});

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
	const modal = newElementWithClass('div', ['modal']);
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
	close.addEventListener("click", () => todoModal.style.display = 'none');
	todoHeader.append(h2, close);

	const todoContent = newElementWithClass('div', ['todo-content']);

	const todoSide = newElementWithClass('ul', ['todo-side']);
	const todoLink = createSideBarLink('Todo', '#');
	const projectLink = createSideBarLink('Project', '#');
	const noteLink = createSideBarLink('Note', '#');
	todoSide.append(todoLink, projectLink, noteLink);

	const todoBody = newElementWithClass('div', ['todo-body']);
	const title = newElement('input', '');
	setAttributes(title, {'placeholder': 'Title: push up', 'required':''});

	const details = newElement('textarea', '');
	setAttributes(details, {'placeholder': 'details of the task...', 'rows': '10', 'cols':'30'})
	
	const date = newElement('input', '');
	date.setAttribute("type", "date");

	const select = newElement('select', '');
	const option1 = newElement('option', 'Select Project');
	const option2 = newElement('option', 'Gym');
	const option3 = newElement('option', 'home');
	select.append(option1, option2, option3);

	const btn = newElementWithClass('button', ['add-btn-todo']);
	const span = newElement('span', 'create Todo');
	span.setAttribute("id", "task-btn");
	btn.append(span);
	todoBody.append(title, details, date, select, btn);

	todoContent.append(todoSide, todoBody);
	todoModalContent.append(todoHeader, todoContent)
	todoModal.append(todoModalContent);

	return todoModal;

}

function createBody() {
	const body = newElementWithClass('div', ['body']);
	
	body.append(createSideBar(), createContent());

	return body;
}




export {createNav, createBody, detailsModal, addTodoModal};





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


