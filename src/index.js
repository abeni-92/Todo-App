import './style.css';

import { createNav, createBody } from './home';

const main = document.getElementById("main");
main.classList.add("main");
// main.textContent = "hello";	
main.append(createNav(), createBody());