import './style.css';

import { createSideBarLink, newElement } from './helper';
import { addTodo } from './script';
// import '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/free-brands-svg-icons';
// import '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/free-regular-svg-icons';
// const main = document.getElementById("main");

function createNav() {
	const nav = newElement('div', '');
	const h1 = newElement('h1', 'TODO');
	const login = newElement('a', 'Login');
	
	nav.classList.add("nav");
	nav.append(h1, login);

	return nav;
}

function createSideBar() {
	const sideBar = newElement('div', '');
	sideBar.classList.add('sidebar');

	const ul = newElement('ul', '');

	const home = createSideBarLink('Home', '#');
	const today = createSideBarLink('Today', '#');
	const week = createSideBarLink('Week', '#');

	const projects = newElement('li', '');
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
	const i = newElement('i', '');
	i.classList.add("fa-circle-plus");
	i.classList.add("fa-solid");
	a.append(i);
	add.append(a);
	add.setAttribute("id", "add");

	add.addEventListener("click", addTodo);

	ul.append(home, today, week, projects, ul2, notes, add);
	sideBar.append(ul);

	return sideBar;
} 

function createContent(){
	const content = document.createElement('div');
	content.classList.add('content');
	
	const row1 = createRow('Play guitar', '16th june');
	const row2 = createRow('Study', 'june 17th');
	const row3 = createRow('Play guitar', '16th june');
	const row4 = createRow('Study', 'june 17th');
	const row5 = createRow('buy grocery', '20th june');
	const row6 = createRow('listen podcast', 'june 22nd');

	content.append(row1);
	content.append(row2);
	content.append(row3);
	content.append(row4);
	content.append(row5);
	content.append(row6);

	return content;
}

function createRow(tk, dt) {
	const row = document.createElement('div');
	row.classList.add('row')
	const left = document.createElement('div');
	left.classList.add('left');
	const right = document.createElement('div');
	right.classList.add('right');

	const checkbox = document.createElement('input');
	checkbox.setAttribute("type", "checkbox");
	const task = newElement('p', tk);

	left.append(checkbox, task);

	const details = newElement('button', 'details');
	const date = newElement('p', dt);

	const editClass = ['fa-pen-to-square', 'fa-solid'];
	const edit = document.createElement('i');
	edit.classList.add(...editClass);

	const deleteClass = ['fa-solid', 'fa-trash-can'];
	const del = document.createElement('i');
	del.classList.add(...deleteClass);

	right.append(details, date, edit, del);
	
	row.append(left, right);

	return row;
}

function displayModal() {
	// const content = document.querySelector('content');
	const modal = document.createElement('div');
	modal.classList.add('modal');
	const modalContent = document.createElement('div');
	modalContent.classList.add('modal-content');

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
	
	modalContent.append(title, project, priority, dueDate, details);
	modal.append(modalContent);

	return  modal;
}

function createBody() {
	const body = newElement('div', '');
	body.classList.add('body');
	
	body.append(createSideBar(), createContent());

	return body;
}


export {createNav, createBody};