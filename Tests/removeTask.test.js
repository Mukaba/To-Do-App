import removeTask from '../src/modules/removeTask.js';
import tasks from '../__mock__/localStorage.js';

describe('removeTask', () => {
  test('Remove task using its id', () => {
    const updateList = removeTask(2, tasks);
    expect(updateList).toEqual([
      { id: 1, name: 'Task 1', status: false },
      { id: 2, name: 'Task 3', status: false },
    ]);
  });
});