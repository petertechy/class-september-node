const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const PORT = 3200;
const {
  displayTask,
  editTask,
  saveTask,
  deleteTask,
} = require("./controllers/task.controller");

const taskRouter = require("./routes/task.routes")
const MONGO_URI =
 "mongodb+srv://petertechy01:Ayobami1999@myproject.9q61gyz.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Mongo DB Connected Successfully");
  })
  .catch(() => {
    console.log("There was an error connecting mongo db");
  });



app.listen(PORT, () => {
  console.log("App is started on PORT:" + PORT);
});

app.use("/task", taskRouter)


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/display", displayTask);

app.get("/edit", editTask);

app.post("/submit-task", saveTask);

app.post("/delete", deleteTask);
