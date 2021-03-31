export default function makeViewTask(taskDB) {
  return async function removeTask(id) {

    const task = await taskDB.findById(id);
    if (!task) {
      throw new RangeError(`Assessment with ID ${id} does not exist.`);
    }
    
    return await taskDB.removeById(id);
  }
}
