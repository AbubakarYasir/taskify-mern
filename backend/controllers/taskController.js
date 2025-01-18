const getTasks = async (req, res) => {
  res.status(200).json({ message: "Fetch tasks" });
};

const addTask = async (req, res) => {
  res.status(201).json({ message: "Add new task" });
};

module.exports = { getTasks, addTask };
