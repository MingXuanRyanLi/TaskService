export default function makeCreateTask(taskDB) {
  return async function createTask(task) {


    if (!task.UserId) {
      throw new Error('Requires UserId.');
    }

    

    task = {
      UserId: task.UserId,
      Task: task.Task,
      start: task.start,
      end: task.end,
      Category: task.Category,
    };

    return await taskDB.insert(task);
  }
}
