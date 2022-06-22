'use strict';

// ! Login form
(() => {
	// ? Variables
	// TODO: Elements
	const formEl = document.getElementById('log-form');
	const userNameEl = document.forms['form']['username'];
	const userEmailEl = document.forms['form']['email'];
	const userPasswordEl = document.forms['form']['password'];
	const loginBtnEl = document.getElementById('log-btn');

	// TODO: For errors
	const nameErrorEl = document.getElementById('username-error');
	const emailErrorEl = document.getElementById('email-error');
	const passErrorEl = document.getElementById('pass-error');

	// TODO: Login date
	let username = 'admin';
	let pass = 'hillel';
	// loginBtnEl.removeAttribute('disabled')
	// ? Functions
	const validated = () => {
		// TODO: Check username
		if (userNameEl.value === username.trim()) {
			userNameEl.style.border = '2px dotted #008000';
			nameErrorEl.style.display = 'none';
			loginBtnEl.removeAttribute('disabled', 'disabled');
		} else {
			userNameEl.style.border = '2px dotted #f00';
			nameErrorEl.style.display = 'block';
			loginBtnEl.setAttribute('disabled', 'disabled');
		}

		// TODO: Check email
		if (userEmailEl.value.length >= 10) {
			userEmailEl.style.border = '2px dotted #008000';
			emailErrorEl.style.display = 'none';
			loginBtnEl.removeAttribute('disabled', 'disabled');
		} else {
			userEmailEl.style.border = '2px dotted #f00';
			emailErrorEl.style.display = 'block';
			loginBtnEl.setAttribute('disabled', 'disabled');
		}

		// TODO: Check password
		if (userPasswordEl.value === pass.trim()) {
			userPasswordEl.style.border = '2px dotted #008000';
			passErrorEl.style.display = 'none';
			loginBtnEl.removeAttribute('disabled', 'disabled');
		} else {
			userPasswordEl.style.border = '2px dotted #f00';
			passErrorEl.style.display = 'block';
			loginBtnEl.setAttribute('disabled', 'disabled');
		}

		loginBtnEl.addEventListener('click', () => {
			formEl.classList.add('hidden');
			document.querySelector('.container').classList.remove('hidden');
		});
	};

	// * AddEventListener
	userNameEl.addEventListener('textInput', validated);
	userEmailEl.addEventListener('click', validated);
	userPasswordEl.addEventListener('textInput', validated);

	document.getElementById('login-user').addEventListener('submit', e => {
		e.preventDefault();
		return validated();
	});
})();

// ! To Do List
(() => {
	const taskValueEl = document.querySelector('.new-task input');
	const addTaskBtnEl = document.querySelector('.new-task button');
	const todoListEl = document.getElementById('list');

	const delAllTaskEl = document.getElementById('buttons-control__all-delete');
	const completeAllTaskEl = document.getElementById(
		'buttons-control__all-completed'
	);

	const newTask = () => {
		const taskValueTextEl = document.createTextNode(taskValueEl.value.trim());

		switch (taskValueEl.value.trim()) {
			case '':
				taskValueEl.placeholder = 'Error, enter your task again...';
				taskValueEl.classList.add('for-error');
				break;

			default:
				taskValueEl.placeholder = 'Enter your task...';
				taskValueEl.classList.remove('for-error');
				const liEl = document.createElement('li');
				const labelEl = document.createElement('label');

				const completeEl = document.createElement('input');
				completeEl.setAttribute('type', 'checkbox');
				completeEl.addEventListener('change', () => {
					liEl.classList.toggle('completed');
				});
				labelEl.append(completeEl);
				liEl.append(labelEl);

				const spanEl = document.createElement('span');
				spanEl.append(taskValueTextEl);
				labelEl.append(spanEl);

				// * Edited
				const btnEl = document.createElement('button');
				btnEl.innerText = 'Delete';

				btnEl.addEventListener('click', e => {
					e.target.parentElement.remove();
				});

				liEl.append(btnEl);
				todoListEl.append(liEl);
				break;
		}

		taskValueEl.value = '';
	};

	const delAllTask = () => {
		[...todoListEl.children].forEach(e => {
			e.remove();
		});
	};

	const completeAllTask = () => {
		[...todoListEl.children].forEach(e => {
			e.classList.toggle('completed');
			e.children[0].children[0].checked = true;
		});
	};

	delAllTaskEl.addEventListener('click', delAllTask);
	completeAllTaskEl.addEventListener('click', completeAllTask);
	addTaskBtnEl.addEventListener('click', newTask);
})();
