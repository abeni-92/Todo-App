const btn = document.getElementById("btn");
const modal = document.querySelector('modal');
btn.addEventListener("click", (e) => {
	const a = e.target.parentElement.parentElement.querySelector('.modal');
	a.style.display = 'block';
	
});