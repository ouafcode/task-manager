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
  check("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be true or false"),
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
