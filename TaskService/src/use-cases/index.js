//data access
import {
  taskDB,
} from '../data-task/index.js'

//external services


//use cases
import makeViewTask from './view-task.js'
import makeCreateTask from './create-task.js'
import makeUpdateTask from './update-task.js'
import makeRemoveTask from './remove-task.js'


const viewTask = makeViewTask(taskDB);
const createTask = makeCreateTask(taskDB);
const updateTask = makeUpdateTask(taskDB);
const removeTask = makeRemoveTask(taskDB);


export {
  viewTask,
  createTask,
  updateTask,
  removeTask,
}
