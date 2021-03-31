import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import {
  getTask,
  postTask,
  patchTask,
  deleteTask
} from './controllers/index.js'
import makeExpressCallback from './express/index.js'

dotenv.config(); //load environment variables
const app = express();
app.use(bodyParser.json());

//routes
app.get('/tasks', makeExpressCallback(getTask));
app.get('/tasks/:id', makeExpressCallback(getTask));
app.post('/tasks', makeExpressCallback(postTask));
app.patch('/tasks/:id', makeExpressCallback(patchTask));
app.delete('/tasks/:id', makeExpressCallback(deleteTask));



//start server
app.listen(process.env.PORT, () => {
  console.log(`Assessment service is running on port ${process.env.PORT}.`);
});
