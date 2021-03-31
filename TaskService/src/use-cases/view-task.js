export default function makeViewTask(taskDB) {
  return async function viewTask(id, queryParameters) {
    if (id) {
      //fetch single assessment
      const task = await taskDB.findById(id);
      if (!task) {
        throw new RangeError(`Assessment with ID ${id} does not exist.`);
      }
      return task;
    } else {
      //fetch multiple assessments
      return await taskDB.find(queryParameters);
    }
  }
}
