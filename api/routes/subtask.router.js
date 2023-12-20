const router = require("express")
const { getAllSubtask, getOneSubtask, updateSubtask, deleteSubtask } = require("../controllers/subtask.controller")

router.get("/", getAllSubtask)
router.get("/:id", getOneSubtask)
router.put("/:id", updateSubtask)
router.delete("/:id", deleteSubtask)

module.exports = router