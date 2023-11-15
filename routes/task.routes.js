const express = require("express")
const router = express.Router()
const {displayTask} = require("../controllers/task.controller")

router.get("/",()=>{
    console.log("This is the the index route for task")
})
router.get("/all_tasks",()=>{
    console.log("Hello this is all tasks")
})

module.exports= router