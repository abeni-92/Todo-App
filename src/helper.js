import './style.css';

function createSideBarLink(link, href) {
	const li = newElement('li', '');
	const a = newElement('a', link);

	// a.textContent = link;
	a.href = href;
	a.classList.add('link');
	li.append(a);

	return li;
}

function newElement(tag, value) {
	const elt = document.createElement(tag);
	elt.textContent = value;

	return elt;
}

export {createSideBarLink, newElement}