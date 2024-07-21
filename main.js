const input = document.querySelector('.input');
const taskList = document.querySelector('.task-list');

function addTask() {
    if(input.value == '') return;

    let task = `<li class="task">
                    <p class="task-text">${input.value}</p>
                    <button class="delete-btn">
                        <ion-icon name="trash-outline" class="trash button"></ion-icon>
                    </button>
                </li>`
    taskList.insertAdjacentHTML('beforeend', task);
    input.value = '';
    input.focus();
}

function doneTask(text) {
    text.classList.toggle('done');
}

function deleteTask(button) {
    button.closest('.task').remove();
}

document.addEventListener('click', (e) => {
    let target = e.target;

    if(target.classList.contains('add-btn')) addTask();

    if(target.classList.contains('task-text')) doneTask(target);

    if(target.className == 'delete-btn' || target.closest('.delete-btn')) deleteTask(target);
});
