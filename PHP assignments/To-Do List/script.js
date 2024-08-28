function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.innerText = taskText;
    li.appendChild(span);

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.onclick = () => editTask(li, span);
    li.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => taskList.removeChild(li);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';
}

function editTask(li, span) {
    const newTaskText = prompt('Edit your task:', span.innerText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        span.innerText = newTaskText.trim();
    }
}
