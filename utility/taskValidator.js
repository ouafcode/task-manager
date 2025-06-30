const { check } = require("express-validator");
const validatorMiddleware = require("../middleware/validatorMiddleware");

exports.getTaskValidator = [
  check("id").isMongoId().withMessage("Invalid task id"),
  validatorMiddleware,
];

exports.createTaskValidator = [
  check("name")
    .notEmpty()
    .withMessage("Task name required")
    .isLength({ max: 32 })
    .withMessage("Task name too long"),
  check("completed").notEmpty().withMessage("Task completed required"),
  validatorMiddleware,
];

exports.updateTaskValidator = [
  check("id").isMongoId().withMessage("Invalid task id"),
  validatorMiddleware,
];

exports.deleteTaskValidator = [
  check("id").isMongoId().withMessage("Invalid task id"),
  validatorMiddleware,
];
