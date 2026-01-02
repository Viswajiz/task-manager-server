const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.userId });
  res.json(tasks);
};

exports.addTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    user: req.userId,
  });
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
