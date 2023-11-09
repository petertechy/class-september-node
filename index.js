const express = require("express")
const ejs = require("ejs")
const app = express()
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
const PORT = 3100

app.listen(PORT, ()=>{
    console.log("App is started on PORT:" + PORT)
})

let taskArray =[]
app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/display", (req, res)=>{
    res.render("display", {task: taskArray})
})

app.get("/edit", (req, res)=>{
    res.render("edit")
})


app.post("/submit-task", (req,res)=>{
    // console.log(req.body)
    taskArray.push(req.body)
    res.render("display", {task: taskArray})
})

app.post("/delete",(req, res)=>{
    const index = req.body.index

    console.log(index)
    taskArray.splice(index, 1)
    res.render("display", {task: taskArray})
})