const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const PORT = 3100;

const MONGO_URI =
  "mongodb+srv://adeboysina:geYzZzKe6bTCfnVI@node-september.p0ryrox.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Mongo DB Connected Successfully");
  })
  .catch(() => {
    console.log("There was an error connecting mongo db");
  });

const taskSchema = mongoose.Schema({
  task: String,
  description: String,
  location: String,
  priority: String,
  createdAt: Date,
});

const taskModel = mongoose.model("taskCollection", taskSchema);

app.listen(PORT, () => {
  console.log("App is started on PORT:" + PORT);
});

let taskArray = [];
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/display", async (req, res) => {
  console.log(" I am being run");
  const tasks = await taskModel.find();
  res.render("display", { task: tasks });
});

app.get("/edit", (req, res) => {
  res.render("edit");
});

app.post("/submit-task", (req, res) => {
  const taskObj = { ...req.body, createdAt: Date.now() };
  console.log(taskObj);
  const form = new taskModel(taskObj);
  form.save();
  res.render("index");
});

app.post("/delete", async (req, res) => {
  const index = req.body.index;
  const deleteItem = await taskModel.findByIdAndDelete(index);
  res.redirect("/display");
});
