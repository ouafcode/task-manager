const mongoose = require("mongoose");

//create Schema
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "task name is required"],
    trim: true,
    maxLength: [20, "max character 20"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//create Model
module.exports = mongoose.model("task", taskSchema);
