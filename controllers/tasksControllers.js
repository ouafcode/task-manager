const asyncHandler = require("express-async-handler");
const taskModel = require("../models/tasksModel");
const ApiError = require("../utility/ApiError");

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await taskModel.find({});
  res.status(201).json({ tasks });
});

const getTask = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const task = await taskModel.findById(id);
  if (!task) {
    return next(new ApiError(`No task for this id : ${id}`, 404));
  }
  res.status(201).json({ task });
});

const createTask = asyncHandler(async (req, res) => {
  const task = await taskModel.create(req.body);
  res.status(201).json({ task });
});

const updateTask = asyncHandler(async (req, res, next) => {
  const task = await taskModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(new ApiError(`No task for this id : ${id}`, 404));
  }
  res.status(201).json({ task });
});

const deleteTask = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const task = await taskModel.findByIdAndDelete(id);
  if (!task) {
    return next(new ApiError(`No task for this id : ${id}`, 404));
  }
  res.status(201).send();
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
