const Subtask = require("../models/subtask.models");

async function getAllSubtask(req, res) {
  try {
    const subtask = await Subtask.findAll();
    console.log(subtask);
    if (subtask) {
      return res.status(200).json(subtask);
    } else {
      return res.status(404).send("No permissions allowed");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneSubtask(req, res) {
  try {
    const subtask = await Subtask.findByPk(req.params.id);
    if (subtask) {
      return res.status(200).json(subtask);
    } else {
      return res.status(404).send("Subtask not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateSubtask(req, res) {
  try {
    const [userExist, subtask] = await Subtask.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (userExist !== 0) {
      return res.status(200).json({ message: "Subtask updated" });
    } else {
      return res.status(404).send("Subtask not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteSubtask(req, res) {
  try {
    const subtask = await Subtask.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (subtask) {
      return res.status(200).json("Subtask deleted");
    } else {
      return res.status(404).send("Subtask not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllSubtask,
  getOneSubtask,
  updateSubtask,
  deleteSubtask,
}