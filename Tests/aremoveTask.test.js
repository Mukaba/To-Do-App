import removeTask from '../src/modules/removeTask.js';
import tasks from '../__mock__/localStorage.js';

describe('removeTask', () => {
  test('should remove task with given id', () => {
    const updatedTasks = removeTask(2, tasks);
    expect(updatedTasks).toEqual([
      { id: 1, name: 'Task 1', status: false },
      { id: 2, name: 'Task 3', status: false },
    ]);
  });
});