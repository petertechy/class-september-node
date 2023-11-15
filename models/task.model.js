const mongoose = require("mongoose")
const taskSchema = mongoose.Schema({
  task: String,
  description: String,
  location: String,
  priority: String,
  createdAt: Date,
});

const taskModel = mongoose.model("taskCollection", taskSchema);
module.exports = taskModel