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
		if (!taskValueTextEl) return;

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
				completeEl.addEventListener('change', e => {
					liEl.classList.toggle('completed');
				});
				labelEl.append(completeEl);
				liEl.append(labelEl);

				const spanEl = document.createElement('span');
				spanEl.append(taskValueTextEl);
				labelEl.append(spanEl);

				const btnEl = document.createElement('button');
				const iconTrashEl = document.createElement('i');
				iconTrashEl.setAttribute('class', 'fa-solid fa-trash-can');
				btnEl.append(iconTrashEl);

				btnEl.addEventListener('click', () => {
					liEl.remove();
				});

				liEl.append(btnEl);
				todoListEl.append(liEl);
				break;
		}

		taskValueEl.value = '';
	};

	const delAllTask = () => {
		Array.from(todoListEl.children).forEach(el => {
			el.remove();
		});
	};

	const completeAllTask = () => {
		Array.from(todoListEl.children).forEach(el => {
			el.classList.toggle('completed');
			el.children[0].children[0].checked = true;
		});
	};

	delAllTaskEl.addEventListener('click', delAllTask);
	completeAllTaskEl.addEventListener('click', completeAllTask);
	addTaskBtnEl.addEventListener('click', newTask);
})();
