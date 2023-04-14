import Task from '../src/modules/task.js';
import addTask from '../src/modules/addTask.js';

describe('addTask', () => {
  test('add a new task in list', () => {
    const tasks = [];
    const taskInput = { value: 'Books for children' };
    const result = addTask(taskInput, tasks);
    expect(result).toEqual([new Task('Books for children', false, 1)]);
  });

});