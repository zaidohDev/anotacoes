const Task = require('../models/Task');

const getAllTask = async (req, res) => {

  try {
    const taskList = await Task.find();

    return res.render("index", { taskList, task: null, deleteTask: null });

  } catch (err) {
    res.status(404).send({ error: err.message });
  }
}

const getByIdTask = async (req, res) => {

  try {
    const taskList = await Task.find();

    if (req.params.method == "update") {
      const task = await Task.findOne({ _id: req.params.id });

      return res.render("index", { task, deleteTask: null, taskList });

    } else {
      const deleteTask = await Task.findOne({ _id: req.params.id });

      return res.render("index", { task: null, deleteTask, taskList });
    }

  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

const createTask = async (req, res) => {

  const task = req.body;

  if (!task.task) {
    return res.redirect("/");
  }

  try {
    await Task.create(task);

    return res.redirect("/");

  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

const updateOneTask = async (req, res) => {
  try {
    await Task.updateOne({ _id: req.params.id, task: req.body.task });

    return res.redirect("/");

  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

const deleteOneTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });

    return res.redirect("/");

  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

module.exports = {
  getAllTask,
  createTask,
  getByIdTask,
  updateOneTask,
  deleteOneTask,
}