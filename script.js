const btns = document.querySelectorAll(".btn");
const modal = document.querySelector('.modal');
const todoModal = document.querySelector('.todo-modal');

btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		// const modal = e.target.parentElement.parentElement.parentElement.querySelector('.modal');
		modal.classList.add('show-modal');

		const close = modal.querySelector('i');
		close.addEventListener("click", (e) => modal.classList.remove('show-modal'));
	})
})

const add = document.querySelector('.add');
add.addEventListener("click", (e) => {
	// const todoModal = e.target.parentElement.parentElement.parentElement.previousElementSibling;
	todoModal.classList.add("todo-show-modal");

	const close = todoModal.querySelector('i');
	close.addEventListener("click", (e) => todoModal.classList.remove("todo-show-modal"));
})

const todoSide = document.querySelectorAll('.link');
const todoBtn = document.getElementById('task-btn');
const todoBody = document.querySelector('.todo-body');
const todoProject = document.querySelector('.project');
const todoNote = document.querySelector('.note');

todoSide.forEach((link) => {
	link.addEventListener("click", (e) => {
		const target = e.target;
		if(target.classList.contains('active')) return

		todoSide.forEach((link) => {
			if(link != target){
				link.classList.remove("active");
			}
		})
		// todoBtn.textContent = 'Todo';
		target.classList.add('active');

		let sideLink = target.dataset.name;

		if(sideLink == 'Todo'){
			todoProject.classList.add("hidden");
			todoNote.classList.add("hidden");
			todoBody.classList.remove("hidden");
		}

		if(sideLink == 'Project'){
			todoBody.classList.add("hidden");
			todoNote.classList.add("hidden");
			todoProject.classList.remove("hidden");
		}
		if(sideLink == 'Note'){
			todoBody.classList.add("hidden");
			todoProject.classList.add("hidden");
			todoNote.classList.remove("hidden");
		}
	})
})

