import { clearCompletedTask, toggleTaskStatus, editTask } from '../src/modules/clearToggleEditTask.js';
import tasks from '../__mock__/localStorage.js';

describe('clearCompletedTask', () => {
  test('return an empty array', () => {
    const cls = clearCompletedTask([]);
    expect(cls).toEqual([]); 
});
  test('if no completed tasks exists it will return the same array', () => {
    const noComptasks = [
      { id: 1, name: 'Task 1', status: false },
      { id: 2, name: 'Task 2', status: false },
      { id: 3, name: 'Task 3', status: false },
    ];
    const nct = clearCompletedTask(noComptasks);
    expect(nct).toEqual(noComptasks);
  });
  test('return an array of incomplete task/s', () => {
    const result = clearCompletedTask(tasks);
    expect(result).toEqual([
      { id: 1, name: 'Task 1', status: false },
      { id: 3, name: 'Task 3', status: false },
    ]);
  });
});
describe('toggleTaskStatus', () => {
  test('if id not found, it will return the same array', () => {
    const res = toggleTaskStatus(4, tasks);
    expect(res).toEqual(tasks);
  });

  test('toggle the status of task with id', () => {
    const res = toggleTaskStatus(2, tasks);
    expect(res).toEqual([
      { id: 1, name: 'Task 1', status: false },
      { id: 2, name: 'Task 2', status: false },
      { id: 3, name: 'Task 3', status: false },
    ]);
  });
  test('return a new array of updated task/s', () => {
    const res = toggleTaskStatus(2, tasks);
    expect(res).not.toBe(tasks);
    expect(res[1]).not.toBe(tasks[1]);
  });
});

describe('editTask', () => {
  const mokSavTask = jest.fn();
  const mokDispTask = jest.fn();
  test('update the task name against its ID', () => {
    const taskId = 2;
    const newNam = 'New Name';
    editTask(taskId, newNam, tasks, mokSavTask, mokDispTask);
    expect(tasks[1].name).toBe(newNam);
  });

  test('if id does not exists not update task', () => {
    const taskId = 4;
    const newNam = 'New Name';
    editTask(taskId, newNam, tasks, mokSavTask, mokDispTask);
    expect(tasks).toEqual(tasks);
  });

  test('call saveTasks after updating a task', () => {
    const taskId = 1;
    const newNam = 'Updated Name';
    editTask(taskId, newNam, tasks, mokSavTask, mokDispTask);
    expect(mokSavTask).toHaveBeenCalled();
    expect(mokDispTask).toHaveBeenCalled();
  });
});