import './style.css';

import './home';
import { createSideBarLink, newElement } from './helper';

function addTodo(e) {
	const main = document.getElementById('main');
	main.append(createTodo());
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


export {addTodo};