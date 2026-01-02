const express = require("express");
const auth = require("../middleware/authMiddleware");
const {
  getTasks,
  addTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", auth, getTasks);
router.post("/", auth, addTask);
router.delete("/:id", auth, deleteTask);

module.exports = router;
