import './style.css';

const tasks = [
  { description: 'Attend Morning sesstion', completed: true, index: 1 },
  { description: 'Pair programming', completed: true, index: 2 },
  { description: 'Standup meeting', completed: false, index: 3 },
];

const todoList = document.getElementById('todo-list');

const renderTasks = () => {
  tasks.forEach((task) => {
    const taskCard = document.createElement('div');
    taskCard.classList = 'task-content';
    taskCard.innerHTML = `<div class="task-text">
                            <input class="block" type="checkbox">
                            <p class="task-text grow">${task.description}</p>
                          </div>
                          <i class="fa-solid fa-trash-can" id="delete-task"></i>`;
    todoList.appendChild(taskCard);
  });
};

renderTasks();