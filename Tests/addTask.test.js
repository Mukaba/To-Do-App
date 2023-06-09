import Task from '../src/modules/task.js';
import addTask from '../src/modules/addTask.js';

describe('addTask', () => {
  it('add to the task list', () => {
    const tasks = [];
    const taskInput = { value: 'Books for children' };
    const ad = addTask(taskInput, tasks);
    expect(ad).toEqual([new Task('Books for children', false, 1)]);
  });
  it('add a new task for non-empty array', () => {
    const tasks = [new Task('Books for children', false, 1)];
    const taskInput = { value: 'Ferry Tails' };
    const ad = addTask(taskInput, tasks);
    expect(ad).toEqual([
      new Task('Books for children', false, 1),
      new Task('Ferry Tails', false, 2),
    ]);
  });
});