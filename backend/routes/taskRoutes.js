const express = require("express");
const { getTasks, addTask } = require("../controllers/taskController");
const router = express.Router();

router.route("/").get(getTasks).post(addTask);

module.exports = router;
