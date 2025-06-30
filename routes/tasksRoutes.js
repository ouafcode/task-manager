const express = require("express");

const {
  getTaskValidator,
  updateTaskValidator,
  createTaskValidator,
  deleteTaskValidator,
} = require("../utility/taskValidator");

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksControllers");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTaskValidator, createTask);
router
  .route("/:id")
  .get(getTaskValidator, getTask)
  .patch(updateTaskValidator, updateTask)
  .delete(deleteTaskValidator, deleteTask);

module.exports = router;
