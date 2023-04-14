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

  test('not remove any task for missing id', () => {
    const updatedTasks = removeTask(5, tasks);
    expect(updatedTasks).toEqual([
      { id: 1, name: 'Task 1', status: false },
      { id: 2, name: 'Task 2', status: true },
      { id: 3, name: 'Task 3', status: false },
    ]);
  });

});