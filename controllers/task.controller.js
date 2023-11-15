const taskModel = require("../models/task.model")

const displayTask = async (req, res) => {
  console.log(" I am being run");
  const tasks = await taskModel.find();
  res.render("display", { task: tasks });
};

const editTask = (req, res) => {
  res.render("edit");
};

const saveTask = (req, res) => {
  const taskObj = { ...req.body, createdAt: Date.now() };
  console.log(taskObj);
  const form = new taskModel(taskObj);
  form.save();
  res.render("index");
};

const deleteTask = async (req, res) => {
  const index = req.body.index;
  const deleteItem = await taskModel.findByIdAndDelete(index);
  res.redirect("/display");
};

module.exports = { displayTask, editTask, saveTask, deleteTask };