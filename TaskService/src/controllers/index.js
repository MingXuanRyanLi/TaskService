//use cases
import {
  viewTask,
  createTask,
  updateTask,
  removeTask
  
} from '../use-cases/index.js'

//controllers
import makeGetTask from './get-task.js'
import makePostTask from './post-task.js'
import makePatchTask from './patch-task.js'
import makeDeleteTask from './delete-task.js'


const getTask = makeGetTask(viewTask);
const postTask = makePostTask(createTask);
const patchTask = makePatchTask(updateTask);
const deleteTask = makeDeleteTask(removeTask);



export {
  getTask,
  postTask,
  patchTask,
  deleteTask

};
