import './style.css';

function createSideBarLink(link, href) {
	const li = newElement('li', '');
	const a = newElement('a', link);
	a.href = href;
	li.append(a);

	return li;
}

function newElement(tag, value) {
	const elt = document.createElement(tag);
	elt.textContent = value;

	return elt;
}

function newElementWithClass(tag, classname){
	const elt = document.createElement(tag);
	elt.classList.add(...classname);

	return elt
}

function setAttributes(el, attrs) {
	for(let key in attrs) {
	  el.setAttribute(key, attrs[key]);
	}
  }

export {createSideBarLink, newElement, newElementWithClass, setAttributes}