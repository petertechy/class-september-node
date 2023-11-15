const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  fullName: {type: String, get: ()=> this.firstName + " " +  this.lastName},
  email: { type: String, required: true },
  password: String,
  bestfriends:[String] ,
  age: {type:Number, min: 18, max: 65},
  role: { type: String, required: true, default:"user" },
  approved: {type: Boolean, default: false},
  favouriteFood: { local: [String], international: [String]},
  createdAt: {type: Date, default: Date.now(), immutable: true}
});