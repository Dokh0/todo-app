const Task = require("../models/task.models")

async function getAllTask(req, res) {
  try {
    const task = await Task.findAll();
    console.log(task);
    if (task) {
      return res.status(200).json(task);
    } else {
      return res.status(404).send("No permissions allowed")
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getOneTask(req, res) {
  try {
    const task = await Task.findByPk(req.params.id)
    if (task) {
      return res.status(200).json(task)
    } else {
      return res.status(404).send("Task not found")
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateTask(req, res) {
  try {
    const [userExist, task] = await Task.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (userExist !== 0) {
      return res.status(200).json({ message: "Task updated" })
    } else {
      return res.status(404).send("Task not found")
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteTask(req, res) {
  try {
    const task = await Task.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (task) {
      return res.status(200).json("Task deleted") 
    } else {
      return res.status(404).send("Task not found")
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllTask,
  getOneTask,
  updateTask,
  deleteTask,
}