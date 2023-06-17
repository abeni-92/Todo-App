import './style.css';

// import '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/free-brands-svg-icons';
// import '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/free-regular-svg-icons';

function createNav() {
	const nav = newElement('div', '');
	const h1 = newElement('h1', 'TODO');
	const login = newElement('a', 'Login');
	
	nav.classList.add("nav");
	nav.append(h1, login);

	return nav;
}

function createBody() {
	const body = newElement('div', '');
	body.classList.add('body');
	
	body.append(createSideBar(), createContent());

	return body;
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

	// const addBtn = document.createElement('i');
	// addBtn.classList('fa-circle');
	// const li = document.createElement('li');
	// const a = document.createElement('a');
	// a.innerText = addBtn;
	// li.append(a);
	// const btn = createSideBarLink(addBtn, '#');

	ul2.append(gym, study);

	ul.append(home, today, week, projects, ul2);
	sideBar.append(ul);

	return sideBar;
} 

function createSideBarLink(link, href) {
	const li = newElement('li', '');
	const a = newElement('a', link);

	// a.textContent = link;
	a.href = href;
	li.append(a);

	return li;
}

function createContent() {
	const content = document.createElement('div');
	const row = document.createElement('div');
	const left = document.createElement('div');
	const right = document.createElement('div');

	const checkbox = document.createElement('checkbox');
	const p1 = newElement('p', 'Play guitar');

	left.classList.add('left');
	left.append(checkbox, p1);

	const btn = newElement('button', 'details');
	const p2 = newElement('p', 'jun 16th');

	right.classList.add('right')
	right.append(btn, p2);
	
	row.classList.add('row')
	row.append(left, right);

	content.classList.add('content');
	content.append(row);
	content.append(row);

	return content;
}

function displayModal() {
	const modal = document.createElement('div');
	modal.classList.add('modal');
	const modalContent = document.createElement('div');
	modalContent.classList.add('modal-content');

	const h2 = newElement('h2', 'Some title');
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
	
	modalContent.append(project, priority, dueDate, details);
	modal.append(modalContent);

	return {modal, modalContent};
}

function newElement(tag, value) {
	const elt = document.createElement(tag);
	elt.textContent = value;

	return elt;
}

export {createNav, createBody};