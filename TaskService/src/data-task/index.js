import mongoose from 'mongoose'
import dotenv from 'dotenv';
import makeTaskDB from './task-db.js'
dotenv.config(); //load environment variables

if (!process.env.MONGODB_URL) {
  throw new Error(`MongoDB connection string missing - please check environment variable configuration.`);
}

//connect to database
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'Database connection error:'));
connection.once('open', () => {
  //connection established
});

const taskDB = makeTaskDB(mongoose);

export {
  taskDB
}
