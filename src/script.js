import './style.css';

import { createTodo, detailsModal } from './home';

const main = document.getElementById('main');

function addTodo(e) {
	main.append(createTodo());
}

function showDetails(e) {
	main.append(detailsModal())
}

export {addTodo, showDetails};