import './style.css';

import { addTodoModal, detailsModal } from './home';

const main = document.getElementById('main');

function addTodo() {
	main.append(addTodoModal());
	
}

function showDetails() {
	main.append(detailsModal())
}

export {addTodo, showDetails};