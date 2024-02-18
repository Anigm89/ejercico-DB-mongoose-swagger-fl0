const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
}, {timestamps: true});

const Task = mongoose.model('task', TaskSchema);

module.exports = Task;