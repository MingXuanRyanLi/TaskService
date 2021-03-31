export default function makeTaskDB(mongoose) {
  const ObjectId = mongoose.Types.ObjectId;
  const Schema = mongoose.Schema;

  //schema
  const TaskSchema = new Schema({
    UserId: String,
    Task: String,
    start: Date,
    end: Date,
    Category: String
    
  });

  //model
  const TaskModel = mongoose.model('Task', TaskSchema);

  //methods
  function checkId(id) {
    if (!ObjectId.isValid(id)) {
      throw new Error('Invalid ObjectID.');
    }
  }

  function toClient(document) {
    const cleaned = document.toObject();

    //remove/replace mongodb fields
    cleaned.id = cleaned._id;
    delete cleaned._id;
    delete cleaned.__v;

    return cleaned;
  }

  function sanitize(obj) {
    delete obj._id;
    return obj;
  }

  async function find(queryParameters) {
    let result = [];
    await TaskModel.find(queryParameters).then(tasks => {
      result = tasks.map(toClient);
    });
    return result;
  }

  async function findById(id) {
    checkId(id);
    let result = null;
    await TaskModel.findById(id).then(task => {
      if (task) {
        result = toClient(task);
      }
    });
    return result;
  }

  async function insert(task) {
    sanitize(task);
    const newTask = new TaskModel(task);

    let createdTask;
    await newTask.save().then(task => {
      createdTask = task;
    });

    return {
      task: toClient(createdTask),
      message: 'Successfully created task.'
    };
  }

  async function update(id, task) {
    checkId(id);
    let result = null;
    await TaskModel.findOneAndUpdate({_id: id}, task, { new: true, runValidators: true }).then(updateResult => {
      result = toClient(updateResult);
    });
    return result;
  }

  async function removeById(id) {
    checkId(id);

    let result = {};

    await TaskModel.deleteOne({_id: id}).then(deleteResult => {
      result.deletedCount = deleteResult.deletedCount;
      if (result.deletedCount === 0) {
        result.message = `Deleted 0 records.`;
      } else {
        result.message = `Successfully deleted task (id:${id}).`
      }
    }).catch(err => {
      console.log(err);
      throw new Error('An unexpected error occured while deleting a record.');
    });

    return result;
  }

  return Object.freeze({
    find,
    findById,
    insert,
    update,
    removeById
  });
}
