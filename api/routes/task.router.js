const router = require("express")
const { getAllTask, getOneTask, updateTask, deleteTask } = require("../controllers/task.controller")

router.get("/", getAllTask)
router.get("/:id", getOneTask)
router.put("/:id", updateTask)
router.delete("/:id", deleteTask)

module.exports = router