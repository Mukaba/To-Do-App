import Task from '../src/modules/task.js';
import addTask from '../src/modules/addTask.js';

describe('addTask function', () => {
  it('add a new task', () => {
    const tasks = [];
    const taskInput = { value: 'Books for children' };
    const result = addTask(taskInput, tasks);
    expect(result).toEqual([new Task('Books for children', false, 1)]);
  });
});