const express = require("express")
const ejs = require("ejs")
const app = express()
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
const PORT = 3100

app.listen(PORT, ()=>{
    console.log("App is started on PORT:" + PORT)
})

app.get("/", (req, res)=>{
    res.render("index")
})

let taskArray =[]

app.post("/submit-task", (req,res)=>{
    taskArray.push(req.body)
    res.render("display", {task: taskArray})
})