export default function makeUpdateTask(taskDB) {
  return async function updateTask(id, task) {

    if (!id) {
      throw new Error('No assessment id provided.');
    }

    if (!task) {
      throw new Error('No assessment update data provided.');
    }

    const existing = await taskDB.findById(id);
    if (!existing) {
      throw new RangeError(`Assessment with ID ${id} does not exist.`);
    }

    let updated = {
      UserId: task.UserId,
      Task: task.Task,
      start: task.start,
      end: task.end,
      Category: task.Category,
      
    };
    

    updated = await taskDB.update(id, updated);

    return {
      existing: existing,
      updated: updated
    }
  }
}
