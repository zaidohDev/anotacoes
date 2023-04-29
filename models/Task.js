const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  check: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("Task", taskSchema);